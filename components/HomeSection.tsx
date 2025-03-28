import Image from "next/image";
import React from "react";
import Form from "./Form";

const HomeSection = () => {
  return (
    <div className="flex flex-col gap-4 pb-5 md:gap-12 lg:flex-row lg:gap-16">
      <main className="flex flex-col gap-8 px-6 pt-5 md:px-0 lg:w-full">
        <section>
          <h1 className="text-center text-[2rem] font-medium leading-10 text-textColor-100 md:text-[40px] md:leading-[3.6rem] 2xl:text-[55px]">
            Find the Best Ride at the Best Price
          </h1>
          <p className="pt-4 text-center text-sm text-textColor-25 md:text-lg">
            Compare prices from top e-hailing services and save money on your next ride
          </p>
        </section>
        <Form />
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

export default HomeSection;
