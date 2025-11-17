import React from 'react';



// Footer Added
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo + Address */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/footer-logo.png"
            alt="Company Logo"
            className="w-24 mb-4"
          />
          <p className="text-gray-700 text-sm leading-6">
            101 W McKnight Way, Suite B<br />
            #255 Grass Valley CA, 95949
          </p>
        </div>

        {/* Account Info */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Account Information</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-blue-700 cursor-pointer">My Account</li>
            <li className="hover:text-blue-700 cursor-pointer">Cart</li>
            <li className="hover:text-blue-700 cursor-pointer">Check Out</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="hover:text-blue-700 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-700 cursor-pointer">AED Navigator</li>
            <li className="hover:text-blue-700 cursor-pointer">AED Navigator Portal</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>(530) 477-6818</li>
            <li className="hover:text-blue-700 cursor-pointer">Email Us</li>
            <li>Monday - Friday</li>
            <li>Hours: 8am - 5pm PST</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#111686] text-white text-center py-4 text-sm">
        Copyright © 2025
      </div>
    </footer>
  );
};

export { Footer };
