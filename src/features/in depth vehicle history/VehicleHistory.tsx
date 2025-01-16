import vehiclebg from "../../assets/images/vehiclebg.png"
import VehicleHistoryCard from "../../components/VehicleHistoryCard"

function VehicleHistory() {
  return (
    <>
          <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={vehiclebg} alt="particles" loading="lazy" className="w-full h-full object-cover rotate-180 opacity-70" />
      </div>

      {/* Overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white py-16">
        <h1 className="text-4xl font-sans font-bold mb-4 text-center">In-Depth Vehicle History Management</h1>
        <p className="text-2xl font-sans text-center max-w-6xl">Fast, accurate transactions that integrate seamlessly with billing and inventory</p>
      </div>

      <VehicleHistoryCard />

       {/* description */}
       <div className="relative max-w-5xl w-full mx-auto mt-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A5A5A5] text-sm leading-relaxed">
            <p className="font-sans text-lg">
            The Car History Card in 6nexd offers a comprehensive overview of a vehicle’s service and maintenance history. It includes critical details such as service records, previous ownership, accident history, and inspection results
            </p>
            <p className="font-sans text-lg">
            Empowering car service businesses and owners to make informed decisions about vehicle care and maintenance.
            </p>
          </div>
        </div>





    </div>
    </>
  )
}

export default VehicleHistory