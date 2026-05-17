import Navbar from "@/Components/Navbar";
import { useState } from "react";
import GetInTouch from "@/Components/GetInTouch";
import Footer from "@/Components/Footer";
const ProcurementPage = () => {
  const [showItem, setShowItem] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="grid  bg-[rgb(225,237,228)] py-40 grid-cols-1 md:px-20 lg:px-40 p-4 sm:px-10 justify-between items-center md:grid-cols-2 gap-5">
        <h1 className="uppercase">procurement</h1>
        <div>
          <input
            type="search"
            placeholder="◌ search"
            size={30}
            className="rounded-sm border-2  bg-white p-2"
            name=""
            id=""
          />
        </div>
      </div>

      <section className="grid md:px-20 lg:px-40 p-4 sm:px-10 grid-cols-1 gap-5 md:grid-cols-2">
        <div className="text-[16px] bg-white border-b border-gray-200 px-3 shadow-sm sticky top-0 z-10 py-10">
          <div className=" flex space-x-1 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="bg-[#EFFFF3] text-[#018725] hover:bg-[#EFFFF3] group transition-all ease-linear duration-500 cursor-pointer">
              <button
                className={`${showItem === 1 ? "bg-[#EFFFF3]" : "bg-white"} py-6 px-3 group-hover:text-[#018725]`}
                onClick={() => setShowItem(1)}
              >
                Expression of Interest (EOI)
              </button>
            </div>
            <div className="bg-white text-[#018725] hover:bg-[#EFFFF3] group transition-all ease-linear duration-500 cursor-pointer">
              <button
                className={`py-6 px-3 group-hover:text-[#018725] ${showItem === 2 ? "bg-[#EFFFF3]" : ""}`}
                onClick={() => setShowItem(2)}
              >
                Requestion of Proposal (RFP)
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={showItem === 1 ? "block" : "hidden "}> 
<h1 className="text-[16px] text-gray-500">
    1 Entry
</h1>
<h1 className="text-[16px] py-5 font-bold">
    Invitation for the Expression of Interest (Pre-Qualification) for Respective Work Areas
</h1>
<p className="text-[16px] text-gray-500">
    The Nigerian Education Loan Fund (NELFUND), established by the Student Loans (Access to Higher Education) Act 2024 which is charged as a Corporate Body to receive, manage and Invest Funds to provide loans to Nigerians for Higher education, Vocational Training and Skills Acquisition. NELFUND is desirous to undertake pre-qualification exercise for the provision of a range of services under the year 2025 budget. Consequently, and in compliance with the relevant provisions of the Public Procurement Act. 2007, NELFUND wishes to invite competent and reputable contractors to indicate interest to pre-qualify to undertake the respective services within the work areas highlighted in the downloadable PDF
</p>

<button className="bg-[#018725] py-1 px-5 my-4 text-white rounded-full ">Apply Now</button>
          </div>
          <div className={showItem === 2 ? "block" : "hidden"}>
            <div className="flex-1 bg-white p-8 min-h-screen">
      {/* Header Info */}
      <div className="mb-12">
        <p className="text-gray-600 text-lg">0 Entries</p>
      </div>


      <div className="flex flex-col items-center justify-center py-24">
        <h2 className="text-gray-500 text-xl font-medium">
          No Request for Proposal entries found.
        </h2>
      </div>

      {/* Pagination / Controls Footer */}
      <div className="mt-auto border-t border-gray-100 pt-6 flex flex-wrap items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <input 
            type="number" 
            defaultValue={10} 
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center outline-none focus:border-green-500"
          />
          <span>records</span>
        </div>

        <div className="">
          <span>Showing 0-0 of 0</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded text-gray-300 cursor-not-allowed">
              &lt;
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded text-gray-300 cursor-not-allowed">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ProcurementPage;
