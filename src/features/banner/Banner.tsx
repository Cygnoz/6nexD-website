import Navbar from "../../components/Navbar"
import bannerimg from "../../assets/images/bannerimg.png"

function Banner() {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Banner Image */}
      <div className="relative">
        <img src={bannerimg} alt="Banner" className="w-full h-auto" loading="eager" />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      {/* Banner Content */}
      <div className="absolute top-1/2 left-4 md:top-2/3 md:left-16 transform -translate-y-1/2 text-left text-white z-20 pt-16 md:pt-0">
        <h1 className="text-xl font-medium sm:text-3xl md:text-5xl lg:text-6xl font-sans  leading-tight">
          Unify Every Aspect of Your <br className="hidden sm:block" /> Operations for Maximum{" "}
          <span className="bg-gradient-to-r from-blue-600 via-green-500 font-sans to-indigo-400 bg-clip-text text-transparent">
            <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight)*1.5)] overflow-hidden">
              <ul className="block  animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">Power </li>
                <li className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">Outcome</li>
                <li className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">Clout</li>
                <li className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent" aria-hidden="true">
                  Power
                </li>
              </ul>
            </span>
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-3 md:mt-5">
          6nexd is an all-in-one <br className="hidden sm:block" /> software solution for the Automotive industry
        </p>
      </div>
    </div>
  )
}

export default Banner
