import Footer from "@/Components/Footer";
import GetInTouch from "@/Components/GetInTouch";
import Mission from "@/Components/Mission";
import Navbar from "@/Components/Navbar";
import NelfundSection from "@/Components/NelfoundSection";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:px-20 lg:px-40 p-4 sm:px-10 grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-5 bg-[rgb(225,237,228)]">
        <div className=" ">
          <h1 className="text-3xl xl:text-5xl lg:text-4xl pt-20 xl:leading-[4rem] font-semibold tracking-tight text-[#101828] text-balance">
            Overview of the student loan Initiative
          </h1>

          <p className="w-full text-[16px] text-[#101828] py-5 lg:py-4 font-normal lg:leading-7 text-balance">
            The Student Loan Initiative is a program established by the Federal
            Government of Nigeria to break financial barriers in higher
            education. Through the provision of interest-free loans, we are{" "}
            <br /> fundamentally reshaping the educational landscape.
          </p>
        </div>
        <div>
          <img src="/download.png" alt="" />
        </div>
      </div>
      <Mission/>
      <NelfundSection/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default AboutPage;
