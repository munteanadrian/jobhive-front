import { AiOutlineBell } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import NotificationPanel from "./NotificationPanel";

export default function NotificationBall() {
  return (
    <div className="w-fit h-full flex justify-center items-center relative">
      {/* <NotificationPanel /> */}

      <div className="bg-white rounded-full flex items-center justify-center h-12 w-12 relative">
        {/* Notification */}
        <div className="bg-red-500 rounded-full w-5 h-5 flex justify-center items-center absolute -top-0.5 -right-0.5">
          <p className="text-white text-xs">4</p>
        </div>
        <AiOutlineBell className="text-2xl" />
      </div>
    </div>
  );
}
