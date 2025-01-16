import { motion } from "framer-motion"; // Import Framer Motion
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

export default function ServiceCards() {
  // Animation variants for scroll animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-4">
      {/* Card 1 */}
      <motion.img
      loading="lazy"
        src={image1}
        alt="Boost customer satisfaction with quicker service"
        className="w-full max-w-sm rounded-xl shadow-lg transition-transform"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Card 2 (Middle card with upward adjustment) */}
      <motion.img
      loading="lazy"
        src={image2}
        alt="Enhance inventory control with ease"
        className="w-full max-w-sm rounded-xl shadow-lg transition-transform -mt-4 md:-mt-6"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />

      {/* Card 3 */}
      <motion.img
      loading="lazy"
        src={image3}
        alt="Real-time insights for smarter decisions"
        className="w-full max-w-sm rounded-xl shadow-lg transition-transform"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      />
    </div>
  );
}
