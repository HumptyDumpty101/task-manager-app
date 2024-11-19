import React from "react";
import NavBar from "@/components/NavBar/NavBar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[200px] w-full text-gray-900">
      <main className={`flex w-full flex-col`}>
        {/* navbar */}
        <NavBar></NavBar>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
