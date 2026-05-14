'use server';

import { Resend } from 'resend';

// Paste your Resend API Key here
const resend = new Resend('re_Xs32tgV1_4Gtu1qLNMKqrwsxXvRjYPjAH');

export async function sendBookingEmail(formData: any) {
  try {
    const { name, phone, address, service_type, preferred_date } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Hickman Plumbing <onboarding@resend.dev>', // Free tier default
      to: ['savannahakins@gmail.com'], // CHANGE THIS to her email
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