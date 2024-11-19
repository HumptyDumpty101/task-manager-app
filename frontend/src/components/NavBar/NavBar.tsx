"use client";
import React, { useState } from "react";
import { BiSolidNotepad } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSideBarCollapsed } from "@/state";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMobileNav = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };
  const pathname = usePathname();

  const isLoginPage = pathname.includes("login");
  const isSignupPage = pathname.includes("signup");

  return (
    <div className="flex items-center justify-between bg-blue-primary px-10 py-3">
      {/* Left Side */}
      <div className="flex items-center gap-8 text-3xl text-white">
        <BiSolidNotepad></BiSolidNotepad>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-end gap-4">
        {!isLoggedIn ? (
          <>
            <Link href={"/login"}>
              <div
                className={`button ${
                  isLoginPage
                    ? "bg-white text-blue-primary"
                    : "bg-blue-primary text-white"
                } hidden md:block`}
              >
                Login
              </div>
            </Link>
            <Link href={"/signup"}>
              <div
                className={`button ${
                  isSignupPage
                    ? "bg-white text-blue-primary"
                    : "bg-blue-primary text-white"
                } hidden md:block`}
              >
                Signup
              </div>
            </Link>
            <div
              className="block cursor-pointer rounded-full bg-white p-2 text-blue-primary md:hidden"
              onClick={toggleMobileNav}
            >
              <GiHamburgerMenu></GiHamburgerMenu>
            </div>
          </>
        ) : (
          <div className="button bg-red-400 text-white">Logout</div>
        )}
      </div>
      {isSideBarCollapsed && (
        <div className="min-h-1/4 fixed right-0 top-12 z-50 w-1/2 bg-blue-primary p-5">
          <div className="flex flex-col gap-5">
            <div
              className="w-fit rounded-full bg-white p-1 text-black"
              onClick={toggleMobileNav}
            >
              <IoMdClose></IoMdClose>
            </div>
            <Link href={"/login"}>
              <div className="bg-blue-primary font-semibold text-white">
                Login
              </div>
            </Link>
            <Link href={"/signup"}>
              <div className="bg-blue-primary font-semibold text-white">
                Signup
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
