import contactus from "../../assets/images/contactus.png"

const ContactUs = () => {
  return (
    <div id="contact" className="relative w-full h-screen overflow-hidden bg-gradient-to-t">
      <img src={contactus} alt="particles" loading="lazy" className="absolute w-full h-full object-cover " />

      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-44">
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
            <div className="w-full md:w-1/2 max-w-sm mx-auto px-4 sm:px-6 md:px-0 mb-16">
  <div className="bg-[#1A1A1A] backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md">
    <form className="space-y-1 ">
      <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans font-bold text-transparent text-2xl sm:text-3xl">
        6NEXD
      </h2>

      <p className="text-[#BBBBBB] text-sm sm:text-base">
        Book a demo to see how 6NEXD can streamline your operations and boost efficiency.
      </p>

      {/* Name Input */}
      <label className="block text-sm text-gray-400">Name</label>
      <input
        type="text"
        id="name"
        className="w-full bg-transparent border-b mt-3 sm:mt-5 text-white focus:outline-none focus:ring-0 border-[#2D2D2D]"
      />

      {/* Contact Number Input */}
      <label className="block text-sm text-gray-400">Contact Number</label>
      <input
        type="tel"
        id="contact"
        className="w-full bg-transparent border-b mt-3 sm:mt-5 text-white focus:outline-none focus:ring-0 border-[#2D2D2D]"
      />

      {/* Business Info Input */}
      <label className="block text-sm text-gray-400">Business Info</label>
      <input
        type="text"
        id="businessInfo"
        className="w-full bg-transparent border-b mt-3 sm:mt-5 text-white focus:outline-none focus:ring-0 border-[#2D2D2D] placeholder-[#A1A1A1]"
      />

      {/* Message Input */}
      <textarea
        id="message"
        placeholder="Your message here"
        rows={4}
        className="w-full bg-transparent border-b mt-3 sm:mt-5 text-white focus:outline-none focus:ring-0 border-[#2D2D2D] placeholder-[#A1A1A1]"
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-white text-[#2D2D2D] font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
      >
        Reserve a Demo
      </button>

      <p className="text-xs text-gray-400 text-center mt-4">
        By clicking Submit, you agree to our Terms of Service and that you have read our Privacy Policy.
      </p>
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
