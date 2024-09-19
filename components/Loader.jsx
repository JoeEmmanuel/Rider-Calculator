import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <section className="absolute top-0 h-screen w-full">
      <div className="relative top-52 flex flex-col items-center gap-6">
        <Image src={"/images/Gradient Spinner.png"} className="rotate" width={100} height={40} />
        <h1 className="text-2xl font-medium md:text-3xl">Finding the Best Prices....</h1>
      </div>
    </section>
  );
};

export default Loader;
