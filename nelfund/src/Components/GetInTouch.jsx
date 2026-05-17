import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="px-5 md:px-10 py-16 bg-white">
      <div className="max-w-5xl mx-auto bg-[#f7f7f7] rounded-sm py-20 px-6 text-center">
        {/* Images */}
        <div className="flex justify-center -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />

          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt=""
            className="w-14 h-14 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-semibold mt-8 text-[#101828]">
          Still have questions?
        </h1>

        {/* Text */}
        <p className="text-[#667085] text-16 mt-6">
          Can't find the answer you're looking for? Please chat to our support
          team.
        </p>

        {/* Buttons */}
        <div className="flex sm:flex-row justify-center gap-2 mt-5">
          <button className="rounded-full bg-[#018725] py-3 px-5 flex gap-2 items-center text-white group">
            <Link to="/PortalPage">Apply now ↗</Link>
          </button>

          <button className="rounded-full bg-[#F3F4F6] py-3 px-5 text-black flex gap-2 items-center group">
            Get in touch ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
