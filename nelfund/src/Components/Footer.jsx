import logo from "../assets/logo.webp";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (

    <footer className="bg-[#f7f7f7] pt-20">

      {/* Top Footer */}
      <div className="md:px-30 lg:px-30 p-4 sm:px-10 mx-auto px-5  grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">

        {/* Left Side */}
        <div className="md:col-span-2">

          <img
            src={logo}
            alt="Logo"
            className="w-72"
          />

          <p className="text-[#101828] text-left text-16  max-w-[300px]">
            The Student Loan initiative is a program established by the Federal
            Government of Nigeria to break financial barriers in higher education
          </p>

        </div>

        {/* Company */}
        <div>

          <h1 className="text-[#98A2B3] text-[16px] font-semibold mb-6">
            Company
          </h1>

          <div className="space-y-5 text-[#475467] text-[16px] font-medium">

            <p>About us</p>
            <p>Contact</p>

          </div>

        </div>

        {/* Social + Legal */}
        <div className="grid grid-cols-2 gap-10">

          {/* Social */}
          <div>

            <h1 className="text-[#98A2B3] text-[16px] font-semibold mb-6">
              Social
            </h1>

            <div className="space-y-5 text-[#475467] text-[16px] font-medium">

              <p>Twitter</p>
              <p>TikTok</p>
              <p>Facebook</p>
              <p>Instagram</p>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h1 className="text-[#98A2B3] text-[16px] font-semibold mb-6">
              Legal
            </h1>

            <div className="space-y-5 text-[#475467] text-[16px] font-medium">

              <p>Terms</p>
              <p>Contact</p>
              <p>Guidelines</p>
              <p>Publication</p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="bg-green-900 py-8">

        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-white text-[16px]">
            © 2025 Nigerian Student Loan. All rights reserved
          </p>

          {/* Icons */}
          <div className="flex gap-5 text-white text-[16px]">

            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />

          </div>

        </div>

      </div>


    </footer>

  );
};

export default Footer;