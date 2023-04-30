import Nav from "./Components/Parts/Nav";
import Dashboard from "./Dashboard";
import Jobs from "./Jobs";
import { useState, useEffect } from "react";

export default function AppController() {
  const [currentPage, setCurrentPage] = useState("");

  const handleLinkClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");

    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className="w-screen h-screen bg-themeBackground font-inter lg:flex">
      <Nav currentPage={currentPage} handleLinkClick={handleLinkClick} />
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "jobs" && <Jobs />}
    </div>
  );
}
