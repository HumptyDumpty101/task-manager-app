"use client";
import React from "react";
import Input from "@/components/FormComponents/Input/Input";
import Link from "next/link";

import { FaLock } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

const Page = () => {
  return (
    <div className="mb-10 mt-10 flex w-full items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-blue-primary md:text-3xl">
          Signup
        </h1>
        <div className="flex min-h-[100px] flex-col justify-center gap-5 rounded-md border-2 border-blue-primary px-5 py-5 md:min-w-[500px] md:p-8">
          <Input
            icon={BsFillPersonFill}
            type="text"
            placeholder="First Name"
            onChange={(e) => {}}
          />
          <Input
            icon={BsFillPersonFill}
            type="text"
            placeholder="Last Name"
            onChange={(e) => {}}
          />
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
          <Input
            icon={FaLock}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {}}
          />
          <div className="button bg-blue-primary text-center text-white">
            Signup
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <p>
              Already have an account?{" "}
              <span className="text-blue-primary">
                <Link href={"/login"}>Login</Link>
              </span>
            </p>
            <div className="button bg-blue-primary text-center text-white">
              Signup With Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
