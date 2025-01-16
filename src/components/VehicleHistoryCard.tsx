import cardcard from '../assets/images/carcard.png';

function VehicleHistoryCard() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg">
      {/* Background Image */}
      <img
        src={cardcard}
        alt="Vehicle History Card"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default VehicleHistoryCard;
