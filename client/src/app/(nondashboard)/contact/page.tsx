"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-customgreys-primarybg text-white-50 px-6">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-customgreys-secondarybg rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side: Contact Info */}
        <div className="hidden md:flex flex-col justify-center bg-primary-700 text-white-50 p-8 w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm text-gray-300 mb-6">
            Have a question? Reach out to us, and we’ll be happy to help.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-lg">📧</span>
              <p className="text-sm">contact@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📞</span>
              <p className="text-sm">+82-10-1234-5678</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg">📍</span>
              <p className="text-sm">123 Tech Road, Seoul, South Korea</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold text-primary-700 mb-4 text-center md:text-left">Contact Us</h1>
          <p className="text-xs text-gray-300 text-center md:text-left mb-6">
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-3 text-sm bg-customgreys-primarybg border border-gray-600 rounded-md text-white-50 focus:outline-none focus:ring-2 focus:ring-primary-700" 
                required 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-3 text-sm bg-customgreys-primarybg border border-gray-600 rounded-md text-white-50 focus:outline-none focus:ring-2 focus:ring-primary-700" 
                required 
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Message</label>
              <textarea 
                name="message" 
                placeholder="Type your message here..." 
                rows={3} 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-3 text-sm bg-customgreys-primarybg border border-gray-600 rounded-md text-white-50 focus:outline-none focus:ring-2 focus:ring-primary-700" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary-700 hover:bg-primary-600 text-white-100 font-semibold py-3 rounded-md text-sm transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;