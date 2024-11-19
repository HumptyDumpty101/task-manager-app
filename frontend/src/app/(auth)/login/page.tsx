"use client";
import React from "react";
import Input from "@/components/FormComponents/Input/Input";
import Link from "next/link";

import { FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Page = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-blue-primary">Login</h1>
        <div className="flex min-h-[100px] flex-col justify-center gap-5 rounded-md border-2 border-blue-primary p-8 md:min-w-[500px]">
          <Input
            icon={IoMail}
            type="email"
            placeholder="Email Address"
            onChange={(e) => {}}
          />
          <Input
            icon={FaLock}
            type="password"
            placeholder="Password"
            onChange={(e) => {}}
          />
          <div className="button bg-blue-primary text-center text-white">
            Login
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p>
              Don&apos;t have an account?{" "}
              <span className="text-blue-primary">
                <Link href={"/signup"}>Signup</Link>
              </span>
            </p>
            <div className="button bg-blue-primary text-center text-white">
              Login With Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
