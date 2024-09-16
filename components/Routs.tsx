import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Routes = () => {
  return (
    <section className="flex flex-col md:items-center lg:flex-row lg:items-end">
      <div className="flex flex-col gap-5 md:flex-row lg:pr-5">
        <div className="flex flex-col gap-4">
          <section className="flex items-center gap-3">
            <div className="flex max-w-full rounded-full bg-[#EEEEEE] p-3">
              <HiLocationMarker className="text-xl" />
            </div>
            <p className="text-base font-medium">Pick up</p>
          </section>
          <section className="flex justify-between gap-3 rounded-lg border border-[#D7D7D7] px-4 py-2 lg:items-center">
            <div className="flex w-64 flex-col md:w-full md:flex-row">
              <p className="break-words text-base leading-6">
                TSarjapur - Marathahalli Road, Countryside Layout, Rainbow Drive, Bengaluru,
                Karnataka,…
              </p>
            </div>
            <FaTimesCircle className="text-base" />
          </section>
        </div>
        <div className="flex flex-col gap-4">
          <section className="flex items-center gap-3">
            <div className="flex max-w-full rounded-full bg-[#EEEEEE] p-3">
              <HiLocationMarker className="text-xl" />
            </div>
            <p className="text-base font-medium">Drop of</p>
          </section>
          <section className="flex justify-between gap-3 rounded-lg border border-[#D7D7D7] px-4 py-2 lg:items-center">
            <div className="flex w-64 flex-col md:w-full md:flex-row">
              <p className="break-words text-base leading-6">
                TSarjapur - Marathahalli Road, Countryside Layout, Rainbow Drive, Bengaluru,
                Karnataka,…
              </p>
            </div>
            <FaTimesCircle className="text-base" />
          </section>
        </div>
      </div>
      <button className="mt-4 w-full rounded-lg bg-[#D3D3D3] py-3 text-center text-white md:w-80">
        Compare Prices
      </button>
    </section>
  );
};

export default Routes;
