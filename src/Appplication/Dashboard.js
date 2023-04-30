import AddJob from "./Components/Dashboard/AddJob";
import ComingUp from "./Components/Dashboard/ComingUp";
import Header from "./Components/Dashboard/Header";
import ToDo from "./Components/Dashboard/ToDo";
import Files from "./Components/Dashboard/Files";
import WelcomePopup from "./Components/Dashboard/WelcomePopup";

export default function Dashboard() {
  return (
    <div className="w-screen lg:w-5/6 h-screen bg-themeBackground py-5 px-5 lg:px-10 flex flex-col gap-5 overflow-y-scroll no-scrollbar">
      {/* HEADER */}
      <Header
        title="Dashboard"
        subtitle="Hello, Adrian. Welcome back to JobHive!"
      />

      <div className="w-full h-1/3">
        <WelcomePopup />
      </div>

      {/* BODY - FIRST ROW */}
      <div style={{ height: "47.5%" }} className="w-full flex gap-5">
        <AddJob />
        <ComingUp />
      </div>

      {/* BODY - SECOND ROW */}
      <div style={{ height: "47.5%" }} className="w-full flex gap-5">
        <ToDo />
        <Files />
      </div>
    </div>
  );
}
