import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import sixnexdlogo from '../../assets/images/SIX.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-4">
            <img
              src={sixnexdlogo}
              className="mb-4 w-48"
            />
            <p className="text-sm mt-8">© Copyright 2024 6nexd™ Inc. All rights reserved.</p>
          </div>

          {/* About Section */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-4">About 6NEXD</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Company Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Worldwide Directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News and Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-4">Address</h3>
            <address className="not-italic">
              <p>NM Arcade, Near All India Radio(AIR),</p>
              <p>NGO Quarters, Kochi,</p>
              <p>Kerala, India</p>
              <p className="mt-4">+919544421166</p>
              <p className="mt-4">
                <a href="mailto:info@tailormateonline.com" className="hover:text-white transition-colors">
                  info@tailormateonline.com
                </a>
              </p>
            </address>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

