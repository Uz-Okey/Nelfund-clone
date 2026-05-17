import { RiDiscountPercentFill } from "react-icons/ri";
import { LuEqualApproximately } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";

const Benefits = () => {

  const benefitsArray = [
    {
      id: 1,
      icon: <RiDiscountPercentFill />,
      title: "Interest-free loans for tuition fees",
    },

    {
      id: 2,
      icon: <LuEqualApproximately />,
      title: "Equal access to higher education for all eligible candidates.",
    },

    {
      id: 3,
      icon: <FaGraduationCap />,
      title: "Reduced financial stress on students and families",
    },
  ];

  return (

    <div className="bg-[#FCFAFA] py-14 px-5 md:px-10">

      {/* Heading */}
      <div className="text-center">

        <h1 className="text-2xl md:text-4xl font-semibold text-black">
          Benefits of Student Loan Initiative
        </h1>

        <p className="text-[#667085] text-lg md:text-xl mt-3">
          A path to Educational Accessibility Without Financial Hurdles
        </p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:px-20 p-4 sm:px-10 py-2  md:grid-cols-3 gap-8 mt-14 mx-auto">

        {benefitsArray.map((items) => (

          <div
            key={items.id}
            className=" transition-all duration-300 p-8 flex flex-col items-center text-center"
          >

            {/* Icon */}
            <div className="text-5xl text-green-600">
              {items.icon}
            </div>

            {/* Title */}
            <p className="text-[#101828] font-semibold text-lg leading-7 mt-6">
              {items.title}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Benefits;