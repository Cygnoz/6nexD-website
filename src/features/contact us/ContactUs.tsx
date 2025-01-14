import particles from "../../assets/images/particles.png"

const ContactUs = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-t from-gray-900 to-black">
      <img src={particles} alt="particles" className="absolute inset-0 w-full h-full object-cover opacity-90" />

      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-8">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans  text-transparent bg-[#1D1D1D] font-bold">Contact</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Connect with</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans font-bold text-transparent">Our Team</span>
                <span className="text-white"> Today</span>
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                We'd love to hear from you! Whether you have questions, feedback, or need guidance, our team is here to help. Reach out and let's explore how
                <span className="text-[#BBBBBB] font-bold font-sans"> 6NEXD</span> can support your business goals.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 max-w-md">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg">
                <form className="space-y-4">
                  <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans font-bold text-transparent">6NEXD</h2>
                  <p className="text-[#393838]">Book a demo to see how 6NEXD can streamline your operations and boost efficiency.</p>
                  <input type="text" placeholder="Name" className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="tel" placeholder="Contact number" className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Business Info" className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <textarea placeholder="Message" rows={4} className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button type="submit" className="w-full bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                    Reserve a Demo
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">By clicking Submit, you agree to our Terms of Service and that you have read our Privacy Policy.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
