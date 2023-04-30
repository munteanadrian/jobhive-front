import Header from "./Components/Dashboard/Header";
import JobTable from "./Components/Jobs/JobTable";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";

export default function Jobs() {
  const jobs = [
    {
      company: "Google",
      location: "Mountain View, CA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Facebook",
      location: "Menlo Park, CA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Amazon",
      location: "Seattle, WA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Apple",
      location: "Cupertino, CA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Microsoft",
      location: "Redmond, WA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Google",
      location: "Mountain View, CA",
      status: "Offer",
      nextUp: "Phone Interview",
    },
    {
      company: "Facebook",
      location: "Menlo Park, CA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Amazon",
      location: "Seattle, WA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
    {
      company: "Apple",
      location: "Cupertino, CA",
      status: "Pending",
      nextUp: "Phone Interview",
    },
  ];

  return (
    <div className="w-screen lg:w-5/6 h-screen bg-themeBackground py-5 px-5 lg:px-10 flex flex-col gap-5 overflow-y-scroll no-scrollbar">
      <Header title="Jobs" subtitle="Find your next job here!" />
      <div style={{ height: "15%" }} className="w-full flex gap-5">
        {/* First one */}
        <div className="h-full w-1/3 bg-white rounded-lg py-5 px-10 relative overflow-hidden">
          <div className="flex gap-4 h-full items-center">
            <h1 className="text-5xl font-bold text-themeBlue z-20">41</h1>
            <div className={`flex flex-col`}>
              <p className="text-themeLight text-sm tracking-wider z-20">
                You have sent
              </p>
              <h2 className="text-themeDark font-bold text-3xl z-20">
                Job Applications
              </h2>
            </div>
          </div>
          <div className="opacity-20 bg-themeBlue rounded-full p-10 absolute -top-5 right-5 z-10">
            <FaRegPaperPlane className="text-8xl text-white" />
          </div>
        </div>

        {/* Second one */}
        <div className="h-full w-1/3 bg-white rounded-lg py-5 px-10 relative overflow-hidden">
          <div className="flex gap-4 h-full items-center">
            <h1 className="text-5xl font-bold text-themeYellow z-20">28</h1>
            <div className="flex flex-col">
              <p className="text-themeLight text-sm tracking-wider z-20">
                In the process with
              </p>
              <h2 className="text-themeDark font-bold text-3xl z-20">
                Companies
              </h2>
            </div>
          </div>
          <div className="opacity-20 bg-themeYellow rounded-full p-10 absolute -top-5 right-5 z-10">
            <IoIosBusiness className="text-8xl text-white" />
          </div>
        </div>

        {/* Third one */}
        <div className="h-full w-1/3 bg-white rounded-lg py-5 px-10 relative overflow-hidden">
          <div className="flex gap-4 h-full items-center">
            <h1 className="text-5xl font-bold text-themeGreen z-20">28</h1>
            <div className="flex flex-col">
              <p className="text-themeLight text-sm tracking-wider z-20">
                You received
              </p>
              <h2 className="text-themeDark font-bold text-3xl z-20">Offers</h2>
            </div>
          </div>
          <div className="opacity-20 bg-themeGreen rounded-full p-10 absolute -top-5 right-5 z-10">
            <BsCurrencyDollar className="text-8xl text-white" />
          </div>
        </div>
      </div>

      <div
        style={{ height: "70%" }}
        className="bg-white rounded-lg p-8 w-full relative overflow-hidden"
      >
        <JobTable jobs={jobs} />

        <div className="w-full bg-gradient-to-t from-white to-transparent h-28 absolute left-0 bottom-0"></div>
      </div>

      <div style={{ height: "5%" }} className="flex justify-between gap-5">
        {/* Add new */}
        <div className="h-full w-1/4 bg-themeGreen rounded-lg"></div>
        <div className="h-full w-1/4 bg-themeGreen rounded-lg"></div>
        <div className="h-full w-1/4 bg-themeGreen rounded-lg"></div>
        <div className="h-full w-1/4 bg-themeGreen rounded-lg"></div>
      </div>
    </div>
  );
}
