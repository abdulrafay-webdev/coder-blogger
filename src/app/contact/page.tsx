"use client";

import React from "react";

import ContactForm from "../components/uiComponents/ContactForm";
import ContactDetail from "../components/uiComponents/ContactDetail";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-indigo-200 to-purple-200 text-white py-10">
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-purple-500 text-center mb-6">
          Contact Us
        </h1>

        {/* Contact Form Section */}
        <ContactForm/>

        {/* Contact Details Section */}
        <ContactDetail/>

      </div>
    </div>
  );
};

export default ContactPage;
