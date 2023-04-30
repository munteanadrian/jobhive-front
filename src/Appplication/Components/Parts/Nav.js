import {
  AiFillMinusSquare,
  AiFillClockCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { FaPaste } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

// replace nav buttons with component

export default function Nav({ currentPage, handleLinkClick }) {
  return (
    // remove last 2 classes to show nav
    <div className="w-screen lg:w-1/6 h-screen bg-white hidden lg:block">
      <div className="w-full h-1/10 flex flex-row items-center justify-between px-5 lg:px-0 lg:justify-center">
        <div className="flex flex-row items-center justify-center gap-1 cursor-pointer">
          <AiFillMinusSquare className="text-4xl rounded-2xl text-themeBlue" />
          <h1 className="text-themeDark font-semibold text-2xl">JobHive</h1>
        </div>
        <div>
          <HiMenu className="lg:hidden text-4xl text-themeDark cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-7/10 overflow-y-scroll no-scrollbar py-4">
        {/* MENU */}
        <div className="w-full">
          <h2 className="uppercase text-themeDark text-xs ml-10 mb-5 font-semibold text-center lg:text-left">
            Menu
          </h2>
          <div className="flex flex-col items-start justify-center mx-2 my-3 gap-3">
            <div
              className={`flex flex-row items-center justify-center lg:justify-start gap-4 py-3 rounded-lg w-full transition duration-150 cursor-pointer ${
                currentPage === "dashboard"
                  ? " text-white bg-themeBlue hover:bg-themeDark"
                  : "text-themeLight hover:bg-themeLight/20"
              }`}
              onClick={() => handleLinkClick("dashboard")}
            >
              <RiDashboardFill className="text-2xl ml-5 xl:ml-10" />
              <h3>Dashboard</h3>
            </div>
            <div
              className={`flex flex-row  items-center justify-center lg:justify-start gap-4 py-3 rounded-lg w-full transition duration-150 cursor-pointer ${
                currentPage === "jobs"
                  ? " text-white bg-themeBlue hover:bg-themeDark"
                  : "text-themeLight hover:bg-themeLight/20"
              }`}
              onClick={() => handleLinkClick("jobs")}
            >
              <IoMdBriefcase className="text-2xl ml-5 xl:ml-10" />
              <h3>My Jobs</h3>
            </div>
            <div
              className={`flex flex-row  items-center justify-center lg:justify-start gap-4 py-3 rounded-lg w-full transition duration-150 cursor-pointer ${
                currentPage === "comingUp"
                  ? " text-white bg-themeBlue hover:bg-themeDark"
                  : "text-themeLight hover:bg-themeLight/20"
              }`}
              onClick={() => handleLinkClick("comingUp")}
            >
              <AiFillClockCircle className="text-2xl ml-5 xl:ml-10" />
              <h3>Coming Up</h3>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full py-10">
          <h2 className="uppercase text-themeDark text-xs ml-10 mb-5 font-semibold text-center lg:text-left">
            Tools
          </h2>
          <div className="flex flex-col items-start justify-center mx-2 my-3 gap-3">
            <div className="flex flex-row  items-center justify-center lg:justify-start gap-4 py-3 rounded-lg w-full hover:bg-themeLight/20 transition duration-150">
              <FaPaste className="text-2xl text-themeLight ml-5 xl:ml-10" />
              <h3 className="text-themeLight">Quick paste</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-2/10 flex">
        <div className="flex flex-col w-full items-center lg:items-start justify-center ml-5 xl:ml-10 gap-7">
          <div className="flex flex-row  items-center justify-center lg:justify-start gap-2 text-themeLight hover:text-themeDark transition duration-150 cursor-pointer">
            <MdLogin className="text-2xl" />
            <h3>Login</h3>
          </div>
          <div className="flex flex-row  items-center justify-center lg:justify-start gap-2 text-themeLight hover:text-themeDark transition duration-150 cursor-pointer">
            <AiFillQuestionCircle className="text-2xl" />
            <h3>Information</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
