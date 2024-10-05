"use client";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { create } from "@/actions/action";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const LocationSchema = z.object({
  pickUp: z.string().min(3, { message: "Pick up is required" }),
  destination: z.string().min(3, { message: "Destination up is required" }),
});

export type LocationSchemaType = z.infer<typeof LocationSchema>;

const HomeSection = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LocationSchemaType>({
    resolver: zodResolver(LocationSchema),
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<LocationSchemaType> = async (formData) => {
    await create(formData); // if this is returning a response turn this into a try catch and redirect the user to the compare page
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="relative flex flex-col gap-4">
            <div className="bordeer-[#EEEEEE] flex justify-end rounded-lg border bg-secondary-100 md:h-14">
              <input
                {...register("pickUp")}
                type="text"
                className="max-w-[90%] flex-1 bg-secondary-100 py-2 pl-4 pr-px outline-none"
                placeholder="Add a pick-up location"
              />
            </div>

            <div className="bordeer-[#EEEEEE] flex justify-end rounded-lg border bg-secondary-100 md:h-14">
              <input
                {...register("destination")}
                type="text"
                className="max-w-[90%] flex-1 bg-secondary-100 py-2 pl-4 pr-px outline-none"
                placeholder="Enter youur destination"
              />
            </div>
            {/* /error messages */}
            <section className="flex flex-col gap-1">
              {errors?.pickUp && (
                <span className="pb-px text-sm text-red-700">{errors?.pickUp?.message}</span>
              )}
              {errors?.destination && (
                <span className="text-sm text-red-700">{errors?.destination?.message}</span>
              )}
            </section>

            {/* /input design */}
            <section className="absolute left-4 top-4 flex flex-col items-center gap-1 md:left-7 md:top-5">
              <div className="h-2 w-2 rounded-md border-2 border-black"></div>
              <div className="min-h-[42px] w-[2px] bg-black md:min-h-[60px]"></div>
              <div className="h-2 w-2 border-2 border-black"></div>
            </section>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary-100 py-3 text-center text-white">
            Compare Prices
          </button>
        </form>
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
