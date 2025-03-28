import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import Form from "./Form";

const Routes = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-5 lg:pr-5">
        {/* <div className="flex flex-col gap-4 lg:w-[380px] lg:max-w-full">
          <section className="flex justify-between gap-3 rounded-lg border border-[#D7D7D7] px-4 py-2 lg:items-center">
            <div className="flex w-64 flex-col md:w-full md:flex-row">
              <p className="break-words text-sm leading-6">
                TSarjapur - Marathahalli Road, Countryside Layout, Rainbow Drive, Bengaluru,
                Karnataka,…
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-4 lg:w-[380px] lg:max-w-full">
          <section className="flex justify-between gap-3 rounded-lg border border-[#D7D7D7] px-4 py-2 lg:items-center">
            <div className="flex w-64 flex-col md:w-full md:flex-row">
              <p className="break-words text-sm leading-6">
                TSarjapur - Marathahalli Road, Countryside Layout, Rainbow Drive, Bengaluru,
                Karnataka,…
              </p>
            </div>
          </section>
        </div> */}
        <Form />
      </div>
    </section>
  );
};

export default Routes;
