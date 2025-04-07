import Image from "next/image";
import React from "react";
import Form from "./Form";

const HomeSection = () => {
  return (
    <section className="flex flex-col gap-10 pb-5 md:gap-12 lg:flex-row lg:gap-8">
      <section className="flex flex-col gap-8 px-6 pt-5 md:px-0">
        <div>
          <h1 className="text-center text-[2rem] font-medium leading-10 text-textColor-100 md:text-[40px] md:leading-[3.6rem] lg:text-start 2xl:text-[55px]">
            Find the Best Ride at the Best Price
          </h1>
          <p className="pt-3 text-center text-sm text-textColor-25 md:text-lg lg:text-start">
            Compare prices from top e-hailing services and save money on your next ride
          </p>
        </div>
        <Form />
      </section>
      <section className="relative max-h-full w-full max-w-full flex-1 px-6 py-2 md:px-0 md:pt-5">
        {/* <div className="heroImgMobile md:heroImg absolute right-0 top-0"></div> */}
        <Image
          src="./images/Hero-image.svg"
          alt="Hero Image"
          width={50}
          height={20}
          loading="lazy"
          className="h-full w-full"
          objectFit="fit"
        />
      </section>
    </section>
  );
};

export default HomeSection;
