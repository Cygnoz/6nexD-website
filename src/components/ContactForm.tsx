// import flowers from '../assets/images/formbg.png'


const ContactForm = () => {
  return (
    <div className="absolute top-1/2 right-20 -translate-y-1/2">
      <div className="relative">
        {/* <img 
          src={flowers} 
          alt="decorative background" 
          className="absolute -z-10 object-contain"
          style={{
            top: '-100px',
            right: '-50px',
            width: '300px'
          }}
        /> */}
        
        <div className="w-full md:w-1/2 max-w-md">
          <div className="bg-[#1A1A1A]/50 backdrop-blur-sm p-6 rounded-lg">
            <form className="space-y-4">
              <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-sans font-bold text-transparent">
                6NEXD
              </h2>
              <p className="text-[#393838]">
                Book a demo to see how 6NEXD can streamline your operations and boost efficiency.
              </p>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Contact number"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Business Info"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
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
  );
};

export default ContactForm;