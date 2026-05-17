import { useState, useEffect } from "react";
import { Spinner } from "@/Components/ui/spinner";
import { Link } from "react-router-dom";
const Hero = () => {
  const [heroText, setHeroText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="herobg pt-15 md:px-20 lg:px-40 px-4 h-screen sm:h-[80vh] md:h-screen">
      {heroText ? (
        <div>
          <div className="text-left text-white p-5">
            <h1 className="text-4xl md:text-6xl mt-10 font-bold">
              Increasing Access to all Education
            </h1>
            <p className="mt-5 md:w-125 text-gray-300 md:text-xl text-[18px]">
              More than a financial aid program, the Student Loan initiative set
              up by the federal Government of Nigeria, is a beacon of hope for
              Nigerian Students pursuing higher education.
            </p>
          </div>

          <div className="block mt-3 px-4 space-x-3">
            <button className="bg-green-700 hover:shadow-2xl py-3 px-3 md:px-5 text-white  font-bold rounded-4xl">
              <Link to="/PortalPage"> APPLY NOW</Link>
            </button>
            <button className="bg-white hover:shadow-2xl py-3 px-5 md:px-10 text-black  font-bold rounded-4xl">
              <Link to="/LoginPage">LOGIN</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <Spinner className="size-12 md:size-30 text-white" />
        </div>
      )}
    </div>
  );
};

export default Hero;
