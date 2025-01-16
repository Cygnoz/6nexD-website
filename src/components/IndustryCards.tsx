import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import card1icon from '../assets/icons/card1icon.png';
import cardicon2 from '../assets/icons/cardicon2.png';
import cardicon3 from '../assets/icons/cardicon3.png';
import cardicon4 from '../assets/icons/cardicon4.png';
import cardicon5 from '../assets/icons/cardicon5.png';
import cardicon6 from '../assets/icons/cardicon6.png';

const industries = [
  {
    id: 1,
    number: '01',
    title: 'Automotive Service & Repair',
    description: 'From auto repair shops to dealerships, 6nexd simplifies billing, inventory tracking, and job card management, making every service more efficient.',
    icon: card1icon,
    bgColor: 'bg-[#FCC817]',
    textColor: 'text-[#3B3A3A]',
  },
  {
    id: 2,
    number: '02',
    title: 'Fleet Management',
    description: 'Manage and maintain company vehicles with detailed service records, real-time inventory management, and streamlined invoicing.',
    icon: cardicon2,
    bgColor: 'bg-[#F1FFF1]',
    textColor: 'text-black',
  },
  {
    id: 3,
    number: '03',
    title: 'Equipment Rental & Service',
    description: 'Optimize operations for rental companies by tracking parts, managing equipment history, and automating billing, ensuring smooth operations.',
    icon: cardicon3,
    bgColor: 'bg-[#689866]',
    textColor: 'text-white',
  },
  {
    id: 4,
    number: '04',
    title: 'Machinery Maintenance',
    description: 'Ideal for industrial machinery maintenance, 6nexd tracks parts, schedules servicing, and provides complete maintenance histories.',
    icon: cardicon4,
    bgColor: 'bg-[#1B82E6]',
    textColor: 'text-white',
  },
  {
    id: 5,
    number: '05',
    title: 'Wheel Alignment & Balance',
    description: '6NEXD helps wheel alignment and balance centers streamline billing, manage parts inventory, and track service history.',
    icon: cardicon5,
    bgColor: 'bg-[#FAF3DD]',
    textColor: 'text-[#484848]',
  },
  {
    id: 6,
    number: '06',
    title: 'Car Detailing Studio',
    description: 'With real-time data and organized records, you can provide top-tier service while streamlining operations and boosting profitability.',
    icon: cardicon6,
    bgColor: 'bg-[#151515]',
    textColor: 'text-white',
  },
];

export default function IndustryCards() {
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to stacked view

  const cardHeight = 200; // Adjust height for each card
  const collapsedHeight = 60; // Height of each stacked card when collapsed
  const extraSpacing = 80; // Extra space to ensure button visibility

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-sans font-bold mb-4">Industries We Serve</h2>
        <p className="text-xl text-gray-200 font-sans max-w-3xl mx-auto">
          6nexd meets the needs of industries requiring efficient billing, inventory management, and service tracking. Here's how 6nexd transforms operations across sectors:
        </p>
      </div>

      <div
        className="relative transition-all"
        style={{
          height: isCollapsed
            ? `${industries.length * collapsedHeight + extraSpacing}px`
            : `${industries.length * cardHeight + extraSpacing}px`,
        }}
      >
        <AnimatePresence>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={false}
              animate={{
                y: isCollapsed ? index * collapsedHeight : index * cardHeight,
                zIndex: industries.length - index,
                opacity: 1, // Keep all cards visible
                scale: isCollapsed && index !== 0 ? 0.95 : 1, // Slightly smaller for collapsed cards
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
              className={`absolute w-full ${industry.bgColor} rounded-xl p-6 shadow-lg`}
            >
              <div className={`flex items-start gap-4 ${industry.textColor}`}>
                <img
                  loading='lazy'
                  src={industry.icon as string} // Ensure the icon resolves to a string
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{industry.title} :</h3>
                  <p className="text-lg">{industry.description}</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-6 text-6xl font-bold opacity-20">
                {industry.number}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-all"
          style={{
            top: isCollapsed
              ? `${industries.length * collapsedHeight + extraSpacing - 20}px`
              : `${industries.length * cardHeight + extraSpacing - 40}px`, // Adjust button position for stacked view
          }}
        >
          <ArrowDown className={`w-6 h-6  text-black transition-transform ${!isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}
