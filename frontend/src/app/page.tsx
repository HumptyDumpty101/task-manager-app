"use client";

import Input from "@/components/FormComponents/Input/Input";

import { IoIosSearch } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 px-5 pt-10 md:px-10 lg:px-20">
      <div className="button w-fit bg-blue-primary text-white">Add Task</div>
      <div className="custom-box-shadow flex flex-row items-center justify-between rounded-sm p-3">
        <div className="flex items-center gap-3">
          Search :
          <Input
            icon={IoIosSearch}
            type="email"
            placeholder="Search ..."
            onChange={(e) => {}}
          />
        </div>
        <div className="flex items-center gap-3">
          Sort By:
          <select>
            <option value="recent">Recent</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
    </main>
  );
}
