import { useState, useEffect } from "react"
import moretoolsbg from "../../assets/images/moretoolsbg.png"
import arrowdown from "../../assets/images/arrowdown.png"
import card1bg from "../../assets/images/ecommercecardbg.png"
import card2bg from "../../assets/images/opticalcharacterrecbg.png"
import card3bg from "../../assets/images/billiecardbg.png"
import "./MoreTools.css"

interface DragEvent extends React.MouseEvent {
  pageX: number
  currentTarget: HTMLDivElement
}

const MoreTools: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [scrollLeft, setScrollLeft] = useState<number>(0)

  useEffect(() => {
    const wrapper = document.querySelector(".marquee-content")
    if (wrapper) {
      const content = wrapper.innerHTML
      wrapper.innerHTML = content + content + content
    }
  }, [])

  const handleMouseDown = (e: DragEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: DragEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - e.currentTarget.offsetLeft
    const walk = (x - startX) * 2
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-gray-500 to-gray-700">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={moretoolsbg} alt="Background" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-white py-16">
        <div className="w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee-content text-4xl font-sans font-semibold whitespace-nowrap" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
              <span className="inline-flex items-center px-4">
                <span className="mx-4">More</span>
                <span className="mx-4">Tools</span>
                <span className="mx-4">for</span>
                <img src={arrowdown} className="h-5 w-5 ml-2" alt="arrow down" />
                <span className="mx-4">Management</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-6">
  {/* E-Commerce Integration Card */}
  <div className="relative overflow-hidden z-1 rounded-lg p-6 min-h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${card1bg})` }}>
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
      <h2 className="text-4xl font-bold text-white mb-4">E Commerce Integration</h2>
      <p className="text-white text-xl mb-8 max-w-2xl">
        Seamlessly connect your online sales with 6nexd for unified billing, inventory, and order <span className="text-emerald-400">management</span>.
      </p>
      <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">Connect Now</button>
    </div>
  </div>

  {/* Optical Character Recognition Card */}
  <div className="relative overflow-hidden z-1 rounded-lg p-6 min-h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${card2bg})` }}>
    <div className="absolute inset-0 bg-black/40" />
    <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Optical Character Recognition</h2>
      <p className="text-white text-xl mb-8 max-w-2xl">
        Enables quick <span className="text-[#C3A231]">scanning</span> and digital conversion of printed text, streamlining data entry and reducing manual errors.
      </p>
      <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">Scan Now</button>
    </div>
  </div>
</div>


          {/* Second row: 1 card that spans 2 columns */}
          <div className="w-full px-8 py-4">
            <div className="relative overflow-hidden z-1 rounded-lg p-6 min-h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${card3bg})` }}>
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
                <h2 className="text-4xl font-bold font-sans text-white mb-4">Billie</h2>
                <p className="text-white text-xl mb-8 max-w-2xl font-sans">
                  <span className="text-[#0E80F0]">Billie </span>is your friendly, AI-powered assistant, ready to enhance your ERP experience. Get real-time support for inventory management, financial reporting, and data analysis, making your workflows smoother and simpler!
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">Chat with Billie</button>
              </div>
            </div>
          </div>



      </div>
    </div>
  )
}

export default MoreTools
