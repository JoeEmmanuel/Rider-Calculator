import Link from "next/link";
import React from "react";
import Loader from "@/components/Loader";

const NoRidesFound = () => {
  return (
    // <section className="absolute top-0 h-screen w-full">
    //   <div className="flex h-full flex-col items-center justify-center gap-4">
    //     <h1 className="bg-text text-center text-2xl font-medium">
    //       No rides available for the <br /> selected route
    //     </h1>
    //     <Link
    //       href={"/"}
    //       className="w-fit cursor-pointer rounded-lg bg-primary-100 px-10 py-3 text-center text-white">
    //       Change Route
    //     </Link>
    //   </div>
    // </section>
    <Loader />
  );
};

export default NoRidesFound;
