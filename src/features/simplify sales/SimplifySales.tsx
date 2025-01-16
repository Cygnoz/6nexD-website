import simplifysalesbg from '../../assets/images/simplifysalesbg.png'
import salesuiimg from '../../assets/images/salesui-img.png'

function SimplifySales() {
  return (
    <>
          <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={simplifysalesbg} alt="particles" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>


      {/* main content */}
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-white py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">Simplify Sales with Our Intuitive POS</h1>
        <p className="text-2xl font-sans text-center max-w-3xl">Fast, accurate transactions that integrate seamlessly with billing and inventory</p>

        <img src={salesuiimg} className='mt-6' alt="" />

        {/* description */}
        <div className="relative max-w-5xl w-full mx-auto mt-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A5A5A5] text-xl leading-relaxed">
            <p>
            The 6nexd POS system simplifies transaction management, tailored specifically for car service businesses. With fast processing, real-time inventory syncing, and accurate invoicing, it ensures every sale is efficient and integrated across your operations.
            </p>
            <p>
            Whether it’s parts sales or service payments, 6nexd POS keeps transactions smooth and customers satisfied.
            </p>
          </div>
        </div>



        </div>




      </div>
    </>
  )
}

export default SimplifySales