
import Footer from '@/Components/Footer';
import GetInTouch from '@/Components/GetInTouch';
import Navbar from '@/Components/Navbar';
import TestimonialGrid from '@/Components/TestimonyGrid';
import { FiSearch } from 'react-icons/fi';

const ImpactPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
        <Navbar/>
      <div className="max-w-4xl mx-auto px-6 py-40 flex flex-col items-center text-center">
        
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-[#1a1a1a]">
          Disbursement Testimonials
        </h1>

        {/* Description */}
        <p className="text-[16px] text-gray-700 leading-relaxed max-w-3xl mb-12">
          At NELFUND, transparency matters. Browse official acknowledgments 
          from partner universities, confirming successful disbursements and 
          our commitment to breaking financial barriers in higher education.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mb-20">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input
            type="text"
            placeholder="SEARCH UNIVERSITY"
            className="w-full py-4 pl-12 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase tracking-wider text-sm"
          />
        </div>

        {/* Testimonial Count Footer */}
        <div className="w-full text-left border-t border-gray-100 pt-8">
          <p className="text-gray-500 font-semibold text-sm tracking-widest uppercase">
            8 Testimonial(s) Found
          </p>
        </div>

      </div>
      <TestimonialGrid/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default ImpactPage;