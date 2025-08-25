"use client";
import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#B68C5A]">We'd love to hear from you</h1>
      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Let's Get in touch</h2>
          <p className="mb-6">You can reach us at our address and contact details below or send your email to <a href="mailto:kesipupbright@gmail.com" className="text-blue-600 underline">kesipupbright@gmail.com</a></p>
          <p className="mb-6">You can reach us at our address and contact details below or send your email to <a href="mailto:kesiupbright@gmail.com" className="text-blue-600 underline">kesiupbright@gmail.com</a></p>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Reach us through</h3>
            <div className="mb-1">Immeubles ATMA Rue Ceper, Yaoundé</div>
            <div className="mb-1">650008403</div>
            <div className="mb-1"><a href="mailto:kesiupbright@gmail.com" className="text-blue-600 underline">kesiupbright@gmail.com</a></div>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Social Networks</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com/kesiUpbright" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <img src="/facebook.png" alt="Facebook" className="w-10 h-10" />
                <span className="font-medium">Kesi Upbright</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <img src="/twitter.png" alt="Twitter" className="w-10 h-10" />
                <span className="font-medium">Twitter</span>
              </a>
              <a href="https://linkedin.com/in/kesiupbright" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <img src="/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
                <span className="font-medium">Kesi Upbright</span>
              </a>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Send us a Message</h3>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2" required />
            <input type="text" placeholder="Phone number" className="w-full border rounded px-3 py-2" required />
            <input type="email" placeholder="Enter your Email Address" className="w-full border rounded px-3 py-2" required />
            <textarea placeholder="Type your Message Here" className="w-full border rounded px-3 py-2" rows={4} required></textarea>
            <button type="submit" className="bg-[#B68C5A] text-white px-6 py-2 rounded hover:bg-[#a07a4a]">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
}
