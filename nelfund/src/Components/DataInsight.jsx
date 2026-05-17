const DataInsight = () => {
  return (

    <div className="bg-[#f7f7f7] py-16 px-5 md:px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

        {/* Left Text */}
        <div className="pt-2">

          <p className="text-xl font-semibold tracking-tight text-[#17A958]! lg:px-0 uppercase">
            DATA INSIGHT
          </p>

          <h1 className="text-[#101828] text-lg font-semibold leading-8 my-2 w-64">
            The Student Loan Initiative is Revolutionising Education Accessibility Across Nigeria.
          </h1>

        </div>

        {/* Card 1 */}
        <div className="bg-white border border-gray-300 rounded-sm h-[260px] flex flex-col justify-center items-center text-center px-6">

          <h1 className="font-semibold text-[37px] text-black">
            348
          </h1>

          <p className="font-normal text-[16px] text-[#505c69]">
            Collaborating with esteemed institutions
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-300 rounded-sm h-[260px] flex flex-col justify-center items-center text-center px-6">

          <h1 className="font-semibold text-[37px] text-black">
            1,366,312
          </h1>

          <p className="font-normal text-[16px] text-[#505c69]">
            Dedicated students registered
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-300 rounded-sm h-[260px] flex flex-col justify-center items-center text-center px-6">

          <h1 className="font-semibold text-[37px] text-black">
            1,694,541
          </h1>

          <p className="font-normal text-[16px] text-[#505c69]">
            Loan successfully disbursed
          </p>

        </div>

      </div>

    </div>

  );
};

export default DataInsight;