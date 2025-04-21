'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Let’s Work Together</h2>
      <p className="text-lg text-center mb-8">
        Get in touch to discuss how Credence Consulting can support your goals.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="max-w-xl mx-auto grid gap-6 bg-white p-8 rounded-lg shadow"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input type="text" name="name" id="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" name="email" id="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea name="message" id="message" rows={5} required className="w-full border border-gray-300 rounded px-4 py-2" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      <div className="mt-12 max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <h3 className="text-base font-semibold mb-1">Address</h3>
          <p>5623, Teskey Way, Chilliwack, BC V2R 0K9, Canada</p>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-1">Phone</h3>
          <p>(604) 213-3915</p>
          <h3 className="text-base font-semibold mt-4 mb-1">Email</h3>
          <p><a href="mailto:info@credenceconsulting.io" className="text-blue-600 hover:underline">info@credenceconsulting.io</a></p>
        </div>
      </div>
    </section>
  );
}
