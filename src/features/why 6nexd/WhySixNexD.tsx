import why6nexdbg from "../../assets/images/why6nexdbg.png";
import ServiceCard from "../../components/ServiceCards";

function WhySixNexD() {
  

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-t from-gray-900 to-black">
      {/* Background with stars/particles effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${why6nexdbg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center">
          <h1 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            What Makes 6NEXD the Right Choice?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            6NEXD enhances car service operations by streamlining billing and
            inventory management while providing real-time insights for business
            growth.
          </p>
        </div>

        {/* Cards Section */}

          
            <ServiceCard/>
      
          
        
      </div>
    </div>
  );
}

export default WhySixNexD;
