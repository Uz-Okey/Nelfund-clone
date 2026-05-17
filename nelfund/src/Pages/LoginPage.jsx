
import { Link } from 'react-router';
import logo from '../assets/logo.webp';

const LoginPage = () => {


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      {/* LEFT SIDE: Login Form */}
      <div className="w-full md:w-[45%] flex flex-col p-6 md:p-12">
        
        {/* Top Branding/Help Row */}
        <div className="flex justify-between items-center mb-16">
         <Link to="/">
        <img src={logo} className="w-24 md:w-32" alt="Logo" />
      </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 w-full max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Welcome to the <span className="text-green-700">Student</span> Loan Portal
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Kindly provide the required details below to login
          </p>

          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input 
                placeholder="********"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all text-sm"
              />
              
            </div>

            {/* Submit Button */}
            <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg shadow-md transition-colors">
                <Link to="/">  Log In</Link>          
            </button>
          </form>

          {/* Reset Options */}
          <div className="mt-6 text-center text-xs text-gray-500">
            Reset your password using your <span className="text-green-600 font-bold cursor-pointer">Email address</span> or <span className="text-green-600 font-bold cursor-pointer">NIN</span>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center text-sm text-gray-500">
          Don't have an Account? <span className="text-green-600 font-bold cursor-pointer">Create New Account</span>
        </div>
      </div>

      {/* RIGHT SIDE: Green Gradient */}
      <div className="hidden md:block flex-1 bg-gradient-to-br from-[#4ade80] via-[#22c55e] to-[#15803d]">
      </div>
    </div>
  );
};

export default LoginPage;