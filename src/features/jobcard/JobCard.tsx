import jobcardbg from '../../assets/images/Efficientjobcardbg.png';
import yellowbg from '../../assets/images/yellowblackbg.png';
import jobcard1 from '../../assets/images/Job-card-detail 1.png';
import jobcard2 from '../../assets/images/Job-cabxbrd-detail 1.png';

type Props = {};

export default function JobCard({}: Props) {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={jobcardbg} loading="lazy" alt="particles" className="w-full h-full object-cover" />
      </div>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center pt-6 pb-8 text-center px-4">
          <h1 className="text-4xl font-sans text-white font-semibold mb-4 drop-shadow-lg">
            Efficient Job Card Management
          </h1>
          <p className="text-lg font-sans text-white drop-shadow-md">
            Easily create, manage, and track job cards for every service request.
          </p>
        </div>

        {/* Cards Container with Image Background */}
        <div className="relative flex-1 flex items-center justify-center p-8">
          <div className="relative max-w-5xl w-full mx-auto">
            {/* Yellow Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl shadow-lg shadow-[#FCC817]"
              style={{ backgroundImage: `url(${yellowbg}) ` }}
            ></div>

            {/* Cards Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-24 p-6">
              {/* First Card */}
              <img src={jobcard1} loading="lazy" alt="card1" />

              {/* Second Card */}
              <img src={jobcard2} loading="lazy" alt="card2" />
            </div>
          </div>
        </div>

         {/* Description Section */}
         <div className="relative max-w-5xl w-full mx-auto mt-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-xl leading-relaxed">
            <p>
              The Job Card feature in Broad allows car service businesses to create, design, and track service tasks efficiently. It provides real-time updates and helps service businesses stay organized and deliver timely updates to customers.
            </p>
            <p>
              It simplifies service management by organizing tasks from start to finish. Easily assign technicians, track job progress in real-time, and ensure that every service task is completed properly and on schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
