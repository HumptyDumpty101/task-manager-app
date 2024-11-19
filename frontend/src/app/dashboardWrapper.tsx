"use client";
import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import StoreProvider, { useAppSelector } from "./redux";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );

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

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
