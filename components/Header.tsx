import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="flex flex-row justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex flex-row">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex flex-row mx-2">
        <ModeToggle />
        <Link href="/" className="ml-2">
          <h2 className="flex items-center text-2xl">
            <span className="font-bold bg-amber-600 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl sm:inline hidden">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
