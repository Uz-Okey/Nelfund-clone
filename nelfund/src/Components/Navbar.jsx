import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  // Closes everything when you click a final link
  const closeAll = () => {
    setOpenMenu(false);
    setOpenAbout(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (openMenu) setOpenAbout(false); // Reset about if closing menu
  };

  const toggleAbout = (e) => {
    e.stopPropagation(); // Prevents clicking "About" from triggering other things
    setOpenAbout(!openAbout);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-50 shadow-md flex justify-between items-center px-6 md:px-20 lg:px-40 py-3">
      <Link to="/" onClick={closeAll}>
        <img src={logo} className="w-24 md:w-32" alt="Logo" />
      </Link>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {openMenu ? "✕" : "≡"}
        </button>

        <div className={`absolute left-0 right-0 top-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          openMenu ? "max-h-[500px] py-6" : "max-h-0 py-0"
        }`}>
          <ul className="flex flex-col items-center gap-6 font-medium">
            <li><Link to="/" onClick={closeAll}>HOME</Link></li>
            
            <li className="flex flex-col items-center">
              <button onClick={toggleAbout} className="flex items-center gap-1">
                ABOUT {openAbout ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              
              {/* Mobile Dropdown */}
              <div className={`flex flex-col items-center gap-4 mt-4 bg-gray-100 w-screen transition-all ${
                openAbout ? "h-auto p-4 opacity-100" : "h-0 opacity-0 overflow-hidden"
              }`}>
                <Link to="/AboutPage" onClick={closeAll} className="hover:text-green-600">ABOUT NELFUND</Link>
                <Link to="/ProcurementPage" onClick={closeAll} className="hover:text-green-600">PROCUREMENT</Link>
              </div>
            </li>

            <li><Link to="/ImpactPage" onClick={closeAll}>IMPACT</Link></li>
            <li><Link to="/FaqPage" onClick={closeAll}>FAQ</Link></li>
            <li>
              <button className="bg-green-700 text-white px-8 py-2 rounded-full"><Link to="/LoginPage">LOGIN</Link></button>
            </li>
          </ul>
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 text-sm font-bold items-center">
          <li><Link to="/" className="hover:text-green-700">HOME</Link></li>
          
          <li className="relative group cursor-pointer" onClick={toggleAbout}>
            <span className="flex items-center gap-1">
              ABOUT {openAbout ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
            
            {/* Desktop Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg border mt-2 py-3 w-48 rounded-md transition-all ${
              openAbout ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}>
              <Link to="/AboutPage" onClick={closeAll} className="block px-4 py-2 hover:bg-gray-100">ABOUT NELFUND</Link>
              <Link to="/ProcurementPage" onClick={closeAll} className="block px-4 py-2 hover:bg-gray-100">PROCUREMENT</Link>
            </div>
          </li>

          <li>
            <Link to="/ImpactPage" className="flex items-center gap-1 hover:text-green-700">
              IMPACT <FiArrowUpRight />
            </Link>
          </li>
          <li>
            <Link to="/FaqPage" className="flex items-center gap-1 hover:text-green-700">
              FAQ <FiArrowUpRight />
            </Link>
          </li>
        </ul>
        <button className="border border-green-700 text-green-700 px-6 py-1 rounded-full hover:bg-green-700 hover:text-white transition-colors">
          <Link to="/LoginPage">LOGIN</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;