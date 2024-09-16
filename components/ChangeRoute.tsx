"use client";
import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoMdPerson } from "react-icons/io";
import Routes from "./Routs";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";

const ChangeRoute = () => {
  const [showRoute, setShowRoute] = useState<boolean>(false);

  // *dommy data source
  // *remove this when api is ready
  const dataSource = [
    {
      image: "/images/image 1.svg",
      name: "Uber",
      cheapest: true,
      details: [
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Moto",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Premier",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      image: "/images/image 2.svg",
      name: "Bolt",
      cheapest: false,
      details: [
        {
          type: "Bolt",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Comfort",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Economiy",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Motorbike",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      image: "/images/image 3.svg",
      name: "Uber",
      cheapest: false,
      details: [
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Moto",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Premier",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      image: "/images/image 4.svg",
      name: "Rida",
      cheapest: false,
      details: [
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Moto",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Premier",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      image: "/images/image 5.svg",
      name: "Lag Ride",
      cheapest: false,
      details: [
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Moto",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "Premier",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "UberGo",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
  ];
  return (
    <section className="px-6 py-5 md:px-16 lg:px-[100px] 2xl:px-40">
      <div className="flex cursor-pointer flex-col gap-7 rounded-md bg-secondary-100 px-3 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base">Change Route</h2>
          <IoIosArrowDown
            onClick={() => setShowRoute((prev) => !prev)}
            className={`bg-red-500 text-lg transition-all lg:hidden ${showRoute ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        {showRoute && <Routes />}
        <div className="hidden lg:block">
          <Routes />
        </div>
      </div>
      {/* about the ride provider */}
      <section className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dataSource.map((data, idx) => (
          <div
            className="w-[450px] max-w-full rounded-2xl border border-[#C6C6C6] bg-secondary-100 py-4"
            key={idx}>
            <div className="flex flex-col gap-4">
              {/* Ride name  */}
              <section className="flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <Image alt="Ride logo" width={70} height={40} src={data.image} />
                  <h2 className="text-xl font-medium text-[#161C2D]">{data.name}</h2>
                </div>
                {data.cheapest && (
                  <div className="rounded-full bg-primary-50 px-8 py-1">
                    <p className="text-primary-100">Cheapest</p>
                  </div>
                )}
              </section>
              <hr />
              {/* Details section */}
              <section className="flex flex-col gap-4 px-4">
                {data.details.map((info, idx) => (
                  <div className="lex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <h2 className="pr-2 text-xl font-medium">{info.type}</h2>
                        <IoMdPerson />
                        <p className="text-base font-medium">4</p>
                      </div>
                      <p className="text-lg font-medium">{info.price}</p>
                    </div>
                    <p className="flex items-center gap-2 text-base">
                      {info.distance}
                      <RxDotFilled />
                      {info.time}
                    </p>
                    <p className="text-sm text-[#545454]">{info.ride}</p>
                  </div>
                ))}
              </section>
            </div>
            <div className="px-4 pt-4">
              <button className="w-full rounded-md bg-primary-100 py-3 text-center text-white">
                Get App
              </button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ChangeRoute;
