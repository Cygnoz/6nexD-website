import particles from "../../assets/images/particles.png"
import card1bg from "../../assets/images/card1bg.png"
import card2bg from "../../assets/images/card2bg.png"
import card3bg from "../../assets/images/card3bg.png"
import card4bg from "../../assets/images/card4bg.png"
import card5bg from "../../assets/images/card5bg.png"
import card6bg from "../../assets/images/card6bg.png"
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import three from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import five from "../../assets/images/five.png"
import six from "../../assets/images/card6.png"

function EssentialServices() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={particles} alt="particles" loading="lazy" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Essential Services</h1>
        <p className="text-lg font-sans text-center max-w-xl">Our Major Offerings streamline operations and enhance customer engagement, tailored for the automotive service industry.</p>

        {/* Cards Section */}
        <div className="flex mt-16 gap-3 px-2 md:flex-row flex-col">
          {/* Card 1*/}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card1bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
                <h2 className="text-6xl font-normal font-sans">Inventory</h2>
                <p className="mt-2 text-sm text-gray-300">Real-time insights into stock levels and turnover for efficient inventory management.</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-28 gap-x-2 mb-1">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">Streamline</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Manage inventory with real-time stock insights, optimizing demand and reordering for greater efficiency.</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-7 right-4 h-4 w-4 font-bold">
              <img src={one} alt="" />
            </div>
          </div>






          {/* Card 2*/}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card2bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
                <h2 className="text-4xl font-normal font-sans">Membership & <br /> <span className="text-[#5B5B5B] text-4xl">Privilege card</span></h2>
                <p className="mt-2 text-sm text-gray-300">Real-time visibility into stock levels and turnover for efficient inventory management</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-24 gap-x-2 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">Streamline</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Boost loyalty with our Membership & Privilege program, providing exclusive discounts and personalized benefits</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-5 right-4 h-6 w-6 font-bold">
              <img src={two} alt="" />
            </div>
          </div>






          {/* card 3 */}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card3bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
                <h2 className="text-6xl font-normal font-sans">Reporting</h2>
                <p className="mt-2 text-sm text-gray-300">Instant insights on loyalty, service, revenue, and inventory for growth</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-28 gap-x-2 mb-1">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">Optimise</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Get insights on loyalty, service, revenue, and inventory for smarter growth decisions</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-5 right-4 h-6 w-6 font-bold">
              <img src={three} alt="" />
            </div>
          </div>
        </div>

              
              
              
              
              
              
              
              
              {/* second row */}
        <div className="flex mt-12 gap-3 px-2 md:flex-row flex-col">


          {/* Card 4*/}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card4bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
              <h2 className="text-4xl font-normal font-sans">Retain  <br /> <span className="text-[#5B5B5B] text-4xl">Your Clients</span></h2>
                <p className="mt-2 font-medium font-sans text-gray-300">Enhance loyalty with tailored communication and timely follow-ups</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-28 gap-x-2 mb-1">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">connect</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Engage clients with personalized communication and follow-ups to foster loyalty</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-7 right-4 h-5 w-5 font-bold">
              <img src={four} alt="" />
            </div>
          </div>






          {/* Card 5*/}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card5bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
                <h2 className="text-4xl font-normal font-sans">Excellent Support</h2>
                <p className="mt-2 text-sm text-gray-300">Dedicated support and guidance for seamless operations and enhanced system performance.</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-40 gap-x-2 ">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">Streamline</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Enjoy 24/7 support from our dedicated team to maximize your system's potential</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-5 right-4 h-6 w-6 font-bold">
              <img src={five} alt="" />
            </div>
          </div>






          {/* card 6 */}
          <div className="relative w-[397px] h-[446px] bg-black overflow-hidden rounded-lg shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card6bg})`,
              }}
            ></div>

            {/* Card Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-between text-white">
              {/* Header Section */}
              <div>
                <h2 className="text-6xl font-normal font-sans">CRM</h2>
                <p className="mt-2 text-sm text-gray-300">Insights into customer interactions for effective relationship building</p>
              </div>

              {/* Divider and Description */}
              <div>
                <div className="mt-36 gap-x-2 mb-1">
                  <div className="flex items-center gap-x-2 ">
                    <span className="text-xs uppercase">Optimise</span>
                    <span className="h-1 w-1 rounded-full bg-white inline-block mt-2 gap-x-2 justify-center"></span>
                  </div>
                  <hr className="w-full mt-2 border-[#525252]" />
                </div>
                <p className="text-sm text-gray-400">Centralize client interactions with our CRM dashboard to track communications and manage leads.</p>
              </div>

              {/* Read More Section */}
              <div className="flex items-center justify-end gap-x-2">
                <button className="text-white text-lg flex items-center gap-x-2">
                  <span className="text-sm font-semibold text-white">Read more</span>
                  &rarr;
                </button>
              </div>
            </div>

            {/* Icon Placeholder */}
            <div className="absolute top-5 right-4 h-6 w-6 font-bold">
              <img src={six} alt="" />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default EssentialServices
