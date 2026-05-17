import {
  FaPercentage,
  FaVenusMars,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaUsers,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";

const NelfundSection = () => {
  const featuresArray = [
    {
      id: 1,
      icon: <FaPercentage />,
      title: "Interest-free loans for tuition fees",
    },
    {
      id: 2,
      icon: <FaVenusMars />,
      title: "Equal access to higher education for all eligible candidates",
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: "Reduced financial stress on students and families",
    },
  ];
  return (
    <div className="font-sans  py-16 px-4 max-w-6xl text-gray-800 bg-white">
      {/* Top Features Section */}
      <section className="md:px-20 lg:px-40 p-4 sm:px-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {featuresArray.map((items) => (
          <div key={items.id} className="flex flex-col items-center">
            <p className="text-4xl text-green-700 mb-4">{items.icon}</p>

            <p className="md:font-semibold text-[16px] text-4xl">{items.title}</p>
          </div>
        ))}
      </section>

      {/* Our Vision Section */}
      <section className="md:px-20 lg:px-40 p-4 sm:px-10 py-20 px-4 max-w-4xl mx-auto">
        <h2 className="md:text-4xl text-[16px] font-bold mb-6">Our Vision</h2>
        <p className="text-[16px] text-lg leading-relaxed mb-6">
          The Student Loan Initiative is in perfect alignment with the
          government's vision for education to be accessible to all Nigerians.
        </p>
        <p className="text-lg text-[16px] text-gray-600 mb-8">
          The Student Loan Initiative embodies this vision as it strives to
          eliminate financial constraints and open the door to academic
          pursuits, enabling students to shape their own future.
        </p>
        <ul className="space-y-4 text-[16px] md:text-lg font-normal">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full"></span> Facilitate
            Financial Access to Higher Education
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full"></span> Collaborate
            with Stakeholders for Impact
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full"></span> Enable Equal
            Opportunity for All Nigerian Students
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-black rounded-full"></span> Promote
            Education for National Development
          </li>
        </ul>
      </section>

      {/* Meet the Stakeholder Section */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="md:text-4xl md:px-20 lg:px-40 p-4 sm:px-10 text-[16px] font-bold mb-8">Meet the Stakeholder</h2>
        <p className="max-w-3xl md:px-20 lg:px-40 p-4 sm:px-10 mx-auto md:text-lg text-[16px] mb-16">
          At the core of the Student Loans (Access to Higher Education) Act,
          2023, lies a network of dedicated stakeholders, each with a
          significant role in transforming accessibility to higher education in
          Nigeria.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-16 gap-x-8">
          {/* Stakeholder Items */}
          <StakeholderCard
            Icon={FaGraduationCap}
            label="Student"
            color="text-green-600"
          />
          <StakeholderCard
            Icon={FaHandHoldingHeart}
            label="Nigerian Education Funds"
            color="text-gray-700"
          />
          <StakeholderCard
            Icon={FaUsers}
            label="Special Committee"
            color="text-green-800"
          />
          <div className="hidden sm:block"></div>{" "}
          {/* Spacer for layout alignment */}
          <StakeholderCard
            Icon={FaUniversity}
            label="Money Deposit Bank"
            color="text-green-900"
          />
          <StakeholderCard
            Icon={FaBriefcase}
            label="Employers"
            color="text-green-700"
          />
        </div>
      </section>
    </div>
  );
};

// Reusable component for the stakeholder icons
const StakeholderCard = ({ Icon, label, color }) => (
  <div className="flex flex-col items-center">
    <Icon className={`text-5xl ${color} mb-4`} />
    <h3 className="font-bold text-lg">{label}</h3>
  </div>
);

export default NelfundSection;
