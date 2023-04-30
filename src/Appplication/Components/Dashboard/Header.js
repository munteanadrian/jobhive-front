import SearchBar from "../Parts/SearchBar";
import NotificationBall from "../Parts/NotificationBall";
// import ProfileBall from "../Parts/ProfileBall";

import { HiMenu } from "react-icons/hi";

export default function DashboardHeader({ title, subtitle }) {
  return (
    <div className="w-full h-0.5/10 flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col justify-center w-full lg:w-1/2 py-5 lg:py-0">
        <h1 className="text-themeDark text-2xl font-bold">{title}</h1>
        <h2 className="text-themeMedium">{subtitle}</h2>
      </div>
      <div className="w-full lg:w-1/2 flex gap-5">
        <SearchBar />
        <NotificationBall />
        {/* <ProfileBall /> */}
        <HiMenu className="lg:hidden text-5xl text-themeDark cursor-pointer" />
      </div>
    </div>
  );
}
