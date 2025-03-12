import commonqueriesbg from '../../assets/images/commonqueriesbg.png';

function CommonQueries() {
  return (
    <>
     <div className="relative w-full min-h-[80vh] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 w-full h-full">
    <img 
      src={commonqueriesbg} 
      loading="eager" 
      alt="particles" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col items-center text-white py-16 px-4">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-sans text-center">
      Answers to Common Queries
    </h1>
    <p className="text-base sm:text-lg font-sans text-center max-w-2xl">
      Find quick answers to common questions about 6NEXD, covering everything from setup to advanced features
    </p>
  </div>

  {/* Cards Section */}
  <div className="max-w-6xl mx-auto p-2">
    {/* Top row */}
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 mb-4">
      {/* Card 1 */}
      <div className="relative overflow-hidden rounded-lg p-4 bg-black/50 w-full md:w-[400px] min-h-[100px]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
          <h2 className="text-lg font-bold text-white leading-tight">
            How does 6NEXD improve billing processes?
          </h2>
          <p className="text-white/90 text-sm">
            6NEXD automates invoicing, reduces billing errors, and accelerates payment processing, saving time and increasing cash flow.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative overflow-hidden rounded-lg p-2 bg-black/50 w-full md:w-[400px] min-h-[100px]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
          <h2 className="text-lg font-bold text-white leading-tight">
            Can I customize 6NEXD to fit my business needs?
          </h2>
          <p className="text-white/90 text-sm">
            Yes, 6NEXD is highly customizable. You can tailor its features to match your specific workflow and business requirements.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom row */}
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4">
      {/* Card 3 */}
      <div className="relative overflow-hidden rounded-lg p-4 bg-black/50 w-full md:w-[400px] min-h-[100px]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
          <h2 className="text-lg font-bold text-white leading-tight">
            Is 6NEXD suitable for small businesses?
          </h2>
          <p className="text-white/90 text-sm">
            Yes, 6NEXD is designed for businesses of all sizes, offering scalable solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative overflow-hidden rounded-lg p-4 bg-black/50 w-full md:w-[400px] min-h-[100px]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
          <h2 className="text-lg font-bold text-white leading-tight">
            How secure is the data in 6NEXD?
          </h2>
          <p className="text-white/90 text-sm">
            6NEXD uses advanced encryption and robust security measures to ensure the safety of your business data.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default CommonQueries;
