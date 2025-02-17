import React from "react"
import sixnexdvideo from "../../assets/video/footervideo.mp4"
import footerbg from "../../assets/images/footerbg.png"
import nexd from "../../assets/images/NEXD.png"

const Footer: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute">
        <img src={footerbg} loading="lazy" alt="particles" className="w-full h-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white py-16">
        <footer className="bg-black text-gray-400 py-12 shadow-lg shadow-[#6B6B6B17] rounded-lg px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Logo Section */}
              <div className="md:col-span-4 flex flex-col items-center">
                <video src={sixnexdvideo} className="mb-4 w-48" muted loop autoPlay playsInline />
                <img src={nexd} className="w-18 h-8 mb-2" alt="" />
              </div>

              {/* About Section */}
              <div className="md:col-span-3">
                <h3 className="text-white font-medium mb-4">About 6NEXD</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Company Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Worldwide Directory
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Investor Relations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      News and Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Newsletter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links Section */}
              <div className="md:col-span-2">
                <h3 className="text-white font-medium mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Implementation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
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
              </div>
            </div>

            {/* Social Links - Moved outside the grid and centered */}
            <div className="flex items-center justify-between gap-6 mt-8 text-gray-400">
              <p className="text-sm">© Copyright 2024 6nexd™ Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-xs hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-xs hover:text-white transition-colors">
                  WhatsApp
                </a>
                <a href="#" className="text-xs hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
