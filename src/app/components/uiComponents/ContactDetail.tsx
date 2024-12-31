import Link from 'next/link';
import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function ContactDetail() {
  return (
    <div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
          <div className="flex flex-col space-y-4">
            <p>
              <strong>Phone:</strong> +92 313 2354942
            </p>
            <p>
              <strong>Email:</strong> abdullrrafay@gmail.com
            </p>
            <p>
              <strong>Address:</strong> North Nazimabad , Karachi , Pakistan
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6 text-3xl text-white">
            <Link
              href="https://www.facebook.com/profile.php?id=61570577443825&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-purple-600 hover:text-blue-500 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/abdulrafaywebdev?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-purple-600 hover:text-pink-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-purple-600 hover:text-blue-700 transition-colors" />
            </Link>
            <Link
              href="https://wa.me/message/6RMRPE5J3PRGL1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-purple-600 hover:text-green-600 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="w-full h-80 sm:h-96">
            {/* You can replace this with an actual map API */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.220095265195!2d67.0373284845926!3d24.92755367803689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3370eeb0a0c81%3A0x9a82c58b1631b2fe!2sSakhi%20Hassan%2C%20North%20Nazimabad%2C%20Karachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1674253584786!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
    </div>
  )
}

export default ContactDetail