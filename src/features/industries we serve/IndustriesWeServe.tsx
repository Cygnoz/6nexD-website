import servicesbg from "../../assets/images/services bg.png"
import IndustryCards from "../../components/IndustryCards"

function IndustriesWeServe() {
  return (
    <>
      <div id="service" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-gray-900 to-black">
        {/* Background Image */}
        <div className="absolute ">
          <img src={servicesbg} loading="lazy" alt="particles" className="w-full h-full object-cover opacity-70" />
        </div>

        {/* Overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-white py-16">
          <IndustryCards />
        </div>
      </div>
    </>
  )
}

export default IndustriesWeServe
