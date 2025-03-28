"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { create } from "@/actions/action";
import { useRouter, useSearchParams } from "next/navigation";

const LocationSchema = z.object({
  pickUp: z.string().min(3, { message: "Pick up is required" }),
  destination: z.string().min(3, { message: "Destination is required" }),
});

export type LocationSchemaType = z.infer<typeof LocationSchema>;

const Form = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pickUp = searchParams.get("pickUp") || "";
  const destination = searchParams.get("des") || "";

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LocationSchemaType>({
    defaultValues: {
      pickUp: pickUp || "",
      destination: destination || "",
    },
    resolver: zodResolver(LocationSchema),
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    const subscription = watch(({ pickUp, destination }) => {
      if (pickUp) {
        router.push(`?${createQueryString("pickUp", pickUp)}`);
      }
      if (destination) {
        router.push(`?${createQueryString("des", destination)}`);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit: SubmitHandler<LocationSchemaType> = async (formData) => {
    await create(formData); // if this is returning a response turn this into a try catch and redirect the user to the compare page
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="relative flex flex-col gap-2">
        <div className="bordeer-[#EEEEEE] flex w-full items-center gap-4 rounded-full border bg-secondary-100 px-4 md:h-14">
          <div className="h-2 w-2 rounded-md border-2 border-textColor-25"></div>
          <input
            {...register("pickUp")}
            type="text"
            className="flex-1 bg-secondary-100 py-2 outline-none"
            placeholder="Add a pick-up location"
          />
        </div>
        <div className="ml-5 min-h-4 w-[1px] bg-textColor-25 md:min-h-7"></div>

        <div className="bordeer-[#EEEEEE] flex w-full items-center gap-4 rounded-full border bg-secondary-100 px-4 md:h-14">
          <div className="h-2 w-2 rounded-md border-2 border-textColor-25"></div>
          <input
            {...register("destination")}
            type="text"
            className="max-w-[90%] flex-1 bg-secondary-100 py-2 pl-2 pr-px outline-none"
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
        {/* <section className="absolute left-4 top-4 flex flex-col items-center gap-1 md:left-7 md:top-5">
        <div className="h-2 w-2 rounded-md border-2 border-black"></div>
        <div className="min-h-[42px] w-[2px] bg-black md:min-h-[60px]"></div>
        <div className="h-2 w-2 border-2 border-black"></div>
      </section> */}
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <button
          type="submit"
          className="w-fit items-center rounded-full bg-primary-100 px-6 py-3 text-white">
          Compare Prices
        </button>
      </div>
    </form>
  );
};

export default Form;
