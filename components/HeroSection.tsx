import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 pb-5 md:gap-12 lg:flex-row lg:gap-16">
      <main className="flex flex-col gap-8 px-6 pt-5 md:px-0 lg:w-full">
        <section>
          <h1 className="text-[32px] font-medium text-[#161C2D] md:text-[40px] 2xl:text-[55px]">
            Find the Best Ride at the Best Price
          </h1>
          <p className="text[#161C2D] pt-4 text-sm md:text-lg">
            Compare prices from top e-hailing services and save money on your next ride
          </p>
        </section>
        <form className="relative flex flex-col gap-4">
          <div className="bordeer-[#EEEEEE] flex justify-end rounded-lg border bg-secondary-100 md:h-14">
            <input
              type="text"
              className="max-w-[90%] flex-1 bg-secondary-100 py-2 pl-4 pr-px outline-none"
              placeholder="Add a pick-up location"
            />
          </div>
          <div className="bordeer-[#EEEEEE] flex justify-end rounded-lg border bg-secondary-100 md:h-14">
            <input
              type="text"
              className="max-w-[90%] flex-1 bg-secondary-100 py-2 pl-4 pr-px outline-none"
              placeholder="Enter youur destination"
            />
          </div>

          {/* /input design */}
          <section className="absolute left-4 top-4 flex flex-col items-center gap-1 md:left-7 md:top-5">
            <div className="h-2 w-2 rounded-md border-2 border-black"></div>
            <div className="min-h-[42px] w-[2px] bg-black md:min-h-[60px]"></div>
            <div className="h-2 w-2 border-2 border-black"></div>
          </section>
        </form>
        <section>
          <button className="w-full rounded-lg bg-primary-100 py-3 text-center text-white">
            <Link href="/compare">Compare Prices</Link>
          </button>
        </section>
      </main>
      <section className="min-h-3 w-full max-w-full px-6 py-2 md:px-0 md:pt-5 lg:w-[900px]">
        <Image
          src="./images/Hero-image.svg"
          alt="Hero Image"
          width={100}
          height={20}
          loading="lazy"
          className="min-h-full w-full"
          objectFit="cover"
        />
      </section>
    </div>
  );
};
