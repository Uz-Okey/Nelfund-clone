import {
  FaMoneyBillWave,
  FaClock,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const PortalPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="font-black text-2xl tracking-tighter text-gray-900">
            <Link to="/">
              <img src={logo} className="w-24 md:w-32" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="text-sm">
          Having Trouble?{" "}
          <span className="text-green-600 font-bold cursor-pointer">
            Get Help
          </span>
        </div>
      </header>

      {/* Main Content Area with Background */}
      <main className="flex-1 flex items-center justify-center bg-green-600 p-4 relative overflow-hidden">
        {/* The Card */}
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 md:p-12 z-10 transition-all duration-500">
          <h1 className="text-[16px] md:text-4xl font-bold text-gray-800 mb-2">
            Welcome to the <span className="text-green-600">Student</span> Loan
            Portal
          </h1>
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-12">
              <FeatureItem
                Icon={FaMoneyBillWave}
                title="Interest Free Loan"
                desc="No hidden charges, completely interest free"
              />
              <FeatureItem
                Icon={FaClock}
                title="Fast & Easy"
                desc="Complete student loan application within 15 - 30 minutes."
              />
              <FeatureItem
                Icon={FaLock}
                title="Safe & Secure"
                desc="Built in security to keep all your data safe"
              />
              <FeatureItem
                Icon={FaCalendarAlt}
                title="Flexible Payment Duration"
                desc="Payment of student loan begins two years after NYSC"
              />
            </div>
            <button className="w-full md:w-max mx-auto block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-5 rounded-lg transition-colors">
              Get Started
            </button>
          </>
        </div>
      </main>
    </div>
  );
};

// Sub-component for the feature list
const FeatureItem = ({ Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="bg-green-100 p-2 h-max rounded-md">
      <Icon className="text-green-700 text-xl" />
    </div>
    <div>
      <h3 className="font-bold text-gray-800 text-sm md:text-base">{title}</h3>
      <p className="text-xs md:text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  </div>
);

export default PortalPage;
