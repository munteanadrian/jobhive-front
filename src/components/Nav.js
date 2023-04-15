import {
  AiFillMinusSquare,
  AiFillClockCircle,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { IoMdBriefcase } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { FaPaste } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="w-1/6 h-screen bg-white">
      <div className="w-full h-1/10 flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-1">
          <AiFillMinusSquare className="text-4xl rounded-2xl text-themeBlue" />
          <h1 className="text-themeDark font-semibold text-2xl">JobHive</h1>
        </div>
      </div>
      <div className="w-full h-7/10 overflow-y-scroll no-scrollbar py-4">
        {/* MENU */}
        <div className="w-full">
          <h2 className="uppercase text-themeDark text-xs ml-10 mb-5 font-semibold">
            Menu
          </h2>
          <div className="flex flex-col items-start justify-center mx-2 my-3 gap-3">
            <div className="flex flex-row gap-4 bg-themeBlue py-3 rounded-lg w-full hover:bg-themeDark transition duration-300">
              <RiDashboardFill className="text-2xl text-white ml-10" />
              <h3 className="text-white">Dashboard</h3>
            </div>
            <div className="flex flex-row gap-4 py-3 rounded-lg w-full hover:bg-themeLight/20 transition duration-300">
              <IoMdBriefcase className="text-2xl text-themeLight ml-10" />
              <h3 className="text-themeLight">My Jobs</h3>
            </div>
            <div className="flex flex-row gap-4 py-3 rounded-lg w-full hover:bg-themeLight/20 transition duration-300">
              <AiFillClockCircle className="text-2xl text-themeLight ml-10" />
              <h3 className="text-themeLight">Coming Up</h3>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full py-10">
          <h2 className="uppercase text-themeDark text-xs ml-10 mb-5 font-semibold">
            Tools
          </h2>
          <div className="flex flex-col items-start justify-center mx-2 my-3 gap-3">
            <div className="flex flex-row gap-4 py-3 rounded-lg w-full hover:bg-themeLight/20 transition duration-300">
              <FaPaste className="text-2xl text-themeLight ml-10" />
              <h3 className="text-themeLight">Quick paste</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-2/10 flex">
        <div className="flex flex-col items-start justify-center ml-10 gap-7">
          <div className="flex flex-row items-center justify-start gap-2 hover:bg-themeDark transition duration-300">
            <MdLogin className="text-2xl text-themeLight" />
            <h3 className="text-themeLight">Login</h3>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 hover:bg-themeDark transition duration-300">
            <AiFillQuestionCircle className="text-2xl text-themeLight" />
            <h3 className="text-themeLight">Information</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
