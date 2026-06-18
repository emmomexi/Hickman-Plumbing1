export type BookingRow = {
  id?: number;
  name: string;
  phone: string;
  address: string;
  service_type: string;
  preferred_date: string;
  created_at?: string;
};

export type BookingInsert = Pick<
  BookingRow,
  'name' | 'phone' | 'address' | 'service_type' | 'preferred_date'
>;

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: BookingRow;
        Insert: BookingInsert;
        Update: Partial<BookingInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};