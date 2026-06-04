import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" className="contact-form">
      <label>Email:</label>
      <input type="email" {...register("email", { required: true })} />
      
      <label>Message:</label>
      <textarea {...register("message", { required: true })} />
      
      <button type="submit">Send Message</button>
    </form>
  );
}
