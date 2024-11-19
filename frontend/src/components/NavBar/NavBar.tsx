"use client";
import React, { useState } from "react";
import { BiSolidNotepad } from "react-icons/bi";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                }`}
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
                }`}
              >
                Signup
              </div>
            </Link>
          </>
        ) : (
          <div className="button bg-red-400 text-white">Logout</div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
