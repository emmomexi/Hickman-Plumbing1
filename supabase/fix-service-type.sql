-- Run this in Supabase Dashboard → SQL Editor
-- Fixes booking form failures caused by old service_type constraints

-- 1) Inspect current bookings columns and constraints
SELECT
  c.column_name,
  c.data_type,
  c.character_maximum_length,
  c.is_nullable
FROM information_schema.columns c
WHERE c.table_schema = 'public'
  AND c.table_name = 'bookings'
ORDER BY c.ordinal_position;

SELECT
  con.conname AS constraint_name,
  pg_get_constraintdef(con.oid) AS constraint_definition
FROM pg_constraint con
JOIN pg_class rel ON rel.oid = con.conrelid
JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
WHERE nsp.nspname = 'public'
  AND rel.relname = 'bookings'
  AND con.contype = 'c';

-- 2) Drop any CHECK constraint on service_type (safe if none exists)
ALTER TABLE public.bookings
  DROP CONSTRAINT IF EXISTS bookings_service_type_check;

-- 3) Ensure service_type accepts the new longer labels
ALTER TABLE public.bookings
  ALTER COLUMN service_type TYPE text;

-- 4) Confirm anonymous users can still submit bookings (skip if policy already exists)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'bookings'
      AND policyname = 'Allow public insert on bookings'
  ) THEN
    CREATE POLICY "Allow public insert on bookings"
      ON public.bookings
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;

-- 5) Quick test insert (delete after verifying)
-- INSERT INTO public.bookings (name, phone, address, service_type, preferred_date)
-- VALUES ('Test User', '4800000000', '123 Test St', 'Install - Tankless Hot Water', '2026-06-20');