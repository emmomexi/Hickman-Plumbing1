'use server';

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { BookingInsert } from '@/lib/types/database';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBookingRequest(submission: BookingInsert) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    return {
      success: false as const,
      error: 'Booking is temporarily unavailable. Please call us directly at (480) 945-6111 or (480) 945-6771!',
    };
  }

  const supabase = createClient(url, anonKey);
  const { error } = await supabase.from('bookings').insert([submission]);

  if (error) {
    console.error('Supabase insert error:', error.message);
    return {
      success: false as const,
      error: 'Error submitting request. Please call us directly at (480) 945-6111 or (480) 945-6771!',
    };
  }

  await sendBookingEmail(submission);
  return { success: true as const };
}

async function sendBookingEmail(formData: BookingInsert) {
  try {
    const { name, phone, address, service_type, preferred_date } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Hickman Plumbing <onboarding@resend.dev>', // Free tier default
      to: ['jxmartinez3571@gmail.com'], // CHANGE THIS to her email
      subject: `NEW BOOKING: ${name}`,
      html: `
        <div style="font-family: sans-serif; border: 5px solid #1B2A41; padding: 20px;">
          <h1 style="color: #B22234;">New Service Request</h1>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Service Requested:</strong> ${service_type}</p>
          <p><strong>Requested Date:</strong> ${preferred_date}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This request was sent from the Hickman Plumbing website.</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error };
    }
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}