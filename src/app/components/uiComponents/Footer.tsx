import React from 'react';
import ButtonSecondary from '../sharedComponents/uiComponents/ButtonSecondary';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="flex space-x-6">
              <li><Link target='blank' href="https://www.facebook.com/profile.php?id=61570577443825&mibextid=ZbWKwL" ><FaFacebook size={30} className="text-white hover:text-blue-800" /></Link></li>
              <li><Link target='blank' href="https://wa.me/message/6RMRPE5J3PRGL1" ><FaWhatsapp size={30} className="text-white hover:text-green-800" /></Link></li>
              <li><Link target='blank' href="https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><FaLinkedin size={30} className="text-white hover:text-blue-900" /></Link></li>
              <li><Link target='blank' href="https://www.instagram.com/abdulrafaywebdev?igsh=YzljYTk1ODg3Zg=="><FaInstagram size={30} className="text-white hover:text-pink-800" /></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and blog posts.</p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 mb-4 rounded-md text-black"
            />
            <ButtonSecondary>Subscribe</ButtonSecondary>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul>
              <li className="mb-2">Email: abdullrrafay@gmail.com</li>
              <li className="mb-2">Phone: +92 313 2354942</li>
              <li className="mb-2">Address: North Nazimabad , Karachi , Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="text-center px-2 py-1 mt-8 bg-white bg-opacity-50">
          <p>&copy; 2024 Code Blogger. All rights reserved.Created By Abdul Rafay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
