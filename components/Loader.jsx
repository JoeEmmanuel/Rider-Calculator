import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <section className="absolute left-0 top-0 h-screen w-full overflow-hidden backdrop-blur-[0.3rem]">
      <div className="relative flex h-svh flex-col items-center justify-center gap-8">
        <Image src={"/images/Graident Spinner.svg"} className="rotate" width={100} height={40} />
        <h1 className="text-xl font-medium text-black md:text-3xl">Finding the Best Prices....</h1>
      </div>
    </section>
  );
};

export default Loader;
