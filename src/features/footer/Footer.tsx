import React from "react"
import sixnexdvideo from "../../assets/video/footervideo.mp4"
import footerbg from "../../assets/images/footerbg.png"
import nexd from "../../assets/images/NEXD.png"

const Footer: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={footerbg}
          loading="lazy"
          alt="particles"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white py-10 md:py-16">
        <footer className="bg-black text-gray-400 py-10 md:py-6 shadow-lg shadow-[#6B6B6B17] rounded-lg px-4 md:px-6 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

              {/* Logo Section */}
              <div className="flex items-end">
                <video
                  src={sixnexdvideo}
                  className="w-32 md:w-48 mr-[-4px]"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="auto"  // Ensures faster loading (similar to eager)
                />
                <img
                  src={nexd}
                  className="w-14 md:w-16 h-6 md:h-10"
                  alt="6NEXD Logo"
                  loading="lazy"  // Loads the image only when needed
                />
              </div>


              {/* About Section */}
              <div>
                <h3 className="text-white font-medium mb-4 text-center md:text-left">About 6NEXD</h3>
                <ul className="space-y-2 text-center md:text-left">
                  {[
                    "Company Information",
                    "Worldwide Directory",
                    "Investor Relations",
                    "Careers",
                    "News and Press",
                    "Events",
                    "Customer Stories",
                    "Newsletter"
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-white font-medium mb-4 text-center md:text-left">Quick Links</h3>
                <ul className="space-y-2 text-center md:text-left">
                  {[
                    "Home",
                    "About",
                    "Features",
                    "Implementation",
                    "Blog",
                    "Contact"
                  ].map((item, index) => (
                    <li key={index}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address Section */}
              <div className="text-center md:text-left">
                <h3 className="text-white font-medium mb-4">Address</h3>
                <address className="not-italic space-y-2">
                  <p>NM Arcade, Near All India Radio (AIR)</p>
                  <p>NGO Quarters, Kochi</p>
                  <p>Kerala, India</p>
                  <p className="mt-4">+919544421166</p>
                  <p className="mt-4">
                    <a
                      href="mailto:info@tailormateonline.com"
                      className="hover:text-white transition-colors"
                    >
                      info@tailormateonline.com
                    </a>
                  </p>
                </address>
              </div>
            </div>

            {/* Social Links - Centered on smaller screens */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8 text-gray-400 text-sm">
              <p className="text-center sm:text-left">
                © Copyright 2024 6nexd™ Inc. All rights reserved.
              </p>
              <div className="flex gap-6">
                {["Facebook", "LinkedIn", "WhatsApp", "Instagram"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-xs hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
