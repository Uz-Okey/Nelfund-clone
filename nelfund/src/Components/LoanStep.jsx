import { CiGlobe } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

const LoanStep = () => {
  const stepArray = [
    {
      id: 1,
      icon: <CiGlobe />,
      title: "Step 1",
      text: " Register on the Student Loan Application Platform by clicking the APPLY NOW button to get started.",
    },
    {
      id: 2,
      icon: <TbCurrencyNaira />,
      title: "Step 2",
      text: " Click on the Request for Student Loan button and complete the loan application steps and submit.",
    },
    {
      id: 3,
      icon: <FaHome />,
      title: "Step 3",
      text: "Your application will be reviewed. After successful verification, payments will be made to your institution and upkeep sent to your bank account.",
    },
  ];

  return (
    <div className="px-4 bg-[rgb(252,250,250)] pb-30">
      {/* Title */}
      <h1 className="text-center md:w-150 mx-auto text-2xl md:text-3xl font-bold py-16 text-gray-800">
        Simple Steps to Secure Your Student Loan
      </h1>

      {/* Grid */}
      <div className="md:px-20 lg:px-40 p-4 sm:px-10 py-2  mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        {stepArray.map((items) => (
          <div
            key={items.id}
            className=" transition-all duration-300 text-center"
          >
            <div className="text-5xl text-green-600 flex justify-center">
              {items.icon}
            </div>

            <h1 className="mt-4 font-bold text-xl">{items.title}</h1>

            <p className="mt-3 text-gray-600 text-sm leading-6">{items.text}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LoanStep;
