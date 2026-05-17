
import image1 from '@/img/download(1).jpg';
import image2 from '@/img/download(2).jpg';
import image3 from '@/img/download(3).jpg';
import image4 from '@/img/download(4).jpg';
import image5 from '@/img/download(5).jpg';
import image6 from '@/img/download(6).jpg';
import image7 from '@/img/download(7).jpg';
import image8 from '@/img/download(8).jpg';

const TestimonialGrid = () => {
  const universities = [
    { id: 1, name: "FEDERAL UNIVERSITY OF BIRNIN KE...", image: image1 },
    { id: 2, name: "FEDERAL UNIVERSITY OF TECHNOL...", image: image2 },
    { id: 3, name: "BORNO STATE UNIVERSITY", image: image3 },
    { id: 4, name: "LAGOS STATE UNIVERSITY OF SCIE...", image: image4 },
    { id: 5, name: "FEDERAL UNIVERSITY OF HEALTH S...", image: image5 },
    { id: 6, name: "FEDERAL UNIVERSITY, DUTSE", image: image6 },
    { id: 7, name: "FEDERAL COLLEGE OF EDUCATION, ...", image: image7 },
    { id: 8, name: "USMANU DANFODIYO", image: image8 },
  ];

  return (
    <div className="bg-[#f9fafb] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {universities.map((uni) => (
          <div 
            key={uni.id} 
            className="bg-white rounded-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer flex flex-col"
          >
            {/* Document Preview Area */}
            <div className="aspect-[3/4] bg-gray-100 flex items-center justify-center p-6">
              <img 
                src={uni.image} 
                alt={uni.name}
                className="w-full h-full object-contain shadow-sm border border-gray-200 bg-white"
              />
            </div>

            {/* University Name Label */}
            <div className="p-5 border-t border-gray-100 bg-white mt-auto">
              <h3 className="text-gray-600 font-bold text-[11px] md:text-xs tracking-wider uppercase truncate">
                {uni.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialGrid;