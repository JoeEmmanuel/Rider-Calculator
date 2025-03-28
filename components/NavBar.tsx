"use client";

import Link from "next/link";
import { MdMenu } from "react-icons/md";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-10 lg:px-[100px]">
      <section>
        <Link href="/" className="text-xl font-bold text-primary-100">
          RideCompare
        </Link>
      </section>
      <section className="">
        {/* <MdMenu className="cursor-pointer text-2xl md:hidden" /> */}
        <ul className="flex md:gap-2">
          <li>
            <Link href="#" className="text-base font-normal text-primary-100">
              About
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};
