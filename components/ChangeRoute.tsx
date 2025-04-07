"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoMdPerson } from "react-icons/io";
import Routes from "./Routs";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { VscPerson } from "react-icons/vsc";
import { Filter } from "./Filter";
import { useSearchParams } from "next/navigation";

interface FetchDataResponse {
  message: string;
}

type FetchDataFunction = () => Promise<FetchDataResponse>;

interface ComparePricesClientProps {
  fetchData: FetchDataFunction;
}

type dataProps = {
  id: number;
  image: string;
  name: string;
  cheapest: boolean;
  details: {
    type: string;
    price: string;
    distance: string;
    time: string;
    ride: string;
  };
};

const ChangeRoute: React.FC<ComparePricesClientProps> = ({ fetchData }) => {
  const [showRoute, setShowRoute] = useState<boolean>(true);
  const [showRouteDetails, setShowRouteDetails] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [rideData, setRideData] = useState([{}]);
  const SearchParams = useSearchParams();

  const param = SearchParams.get("filter") || "all";

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      console.log(result);
      setLoading(false);
    };

    loadData();
  }, [fetchData]);

  // *dommy data source
  // *remove this when api is ready
  const dataSource = [
    {
      id: 1,
      image: "/images/image 1.svg",
      name: "Uber",
      cheapest: true,
      details: [
        {
          type: "UberGo",
          price: "N9,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
        {
          type: "UberGo",
          price: "N9,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      id: 2,
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
          type: "Bolt",
          price: "N12,000",
          distance: "2 mins away",
          time: "15:24",
          ride: "Affordable, compact rides",
        },
      ],
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
  const filterDatas = dataSource.filter((filteredData) => {
    if (param === "all") {
      return filteredData;
    }

    const cheapCheck = param === "cheapest";

    if (cheapCheck === filteredData.cheapest) {
      return filteredData;
    }
    // switch (param) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }
    return false;
  });

  useEffect(() => {
    filterDatas;
  }, [param]);

  const handleClick = (id: number) => {
    setShowRouteDetails((prev) => {
      if (prev.includes(id)) {
        // If the route's details are already open, remove it from the array (close it)
        return prev.filter((routeId) => routeId !== id);
      } else {
        // Otherwise, add it to the array (open it)
        return [...prev, id];
      }
    });
  };

  return (
    <section className="px-6 py-5 md:flex md:gap-5 md:px-16 lg:gap-20 lg:px-[6.3rem] 2xl:px-52">
      {/*  header section */}
      <section className="flex cursor-pointer flex-col gap-7 rounded-md px-3 py-4 lg:w-full lg:max-w-[25rem]">
        <div className="flex cursor-auto items-center justify-between">
          <h2 className="text-base md:text-xl">Route</h2>
          <div
            onClick={() => setShowRoute((prev) => !prev)}
            className={`rounded-full bg-secondary-100 p-2 md:hidden`}>
            <IoIosArrowDown
              className={`text-lg transition-all ${showRoute ? "rotate-180" : "rotate-0"}`}
            />
          </div>
        </div>
        {showRoute && <Routes />}
        {/* <div className="hidden lg:block">
          <Routes />
        </div> */}
      </section>

      {!filterDatas ||
        (filterDatas.length === 0 ? (
          <section className="flex h-[100svh] w-full items-center justify-center rounded-2xl border-[0.5px] border-secondary-50 bg-secondary-100 p-3">
            <Image
              src="/images/Ride-NotFound.svg"
              alt="Hero Image"
              width={50}
              height={20}
              loading="lazy"
              className="h-full w-full"
              objectFit="fit"
            />
          </section>
        ) : (
          <>
            <section className="mt-8 flex h-fit flex-col gap-4 rounded-2xl bg-secondary-100 p-3 md:flex-1">
              <Filter />
              {/* about the ride provider */}
              <section className="flex flex-col gap-4">
                {filterDatas.map((data) => {
                  const isDetailsVisible = showRouteDetails.includes(data.id);
                  return (
                    <div
                      className="w-full rounded-2xl border-[0.5px] border-secondary-50 bg-white py-4"
                      key={data.id}>
                      <div className="flex flex-col gap-4">
                        {/* Ride provider name  */}
                        <section
                          className={`flex items-center justify-between ${isDetailsVisible ? "border-b-[0.045rem] pb-5" : "border-b-none pb-0"} border-b-secondary-50 px-4 pt-2`}>
                          <div className="flex items-center gap-3">
                            <Image alt="Ride logo" width={55} height={35} src={data.image} />
                            <h2 className="text-lg font-medium text-[#161C2D] lg:text-2xl">
                              {data.name}
                            </h2>
                            {data.cheapest && (
                              <div className="w-full rounded-full bg-secondary-100 px-3 py-1">
                                <p className="text-xs text-textColor-50">Cheapest</p>
                              </div>
                            )}
                          </div>

                          <div
                            onClick={() => handleClick(data.id)}
                            className="rounded-full bg-secondary-100 p-2">
                            <IoIosArrowDown
                              className={`text-lg transition-all ${isDetailsVisible ? "rotate-180" : "rotate-0"}`}
                            />
                          </div>
                        </section>

                        {/* Details section */}
                        <section
                          className={`${isDetailsVisible ? "flex" : "hidden"} flex-col gap-4 px-4`}>
                          {data.details.map((info, idx) => (
                            <div className={``}>
                              <div key={idx} className="lex flex-col gap-1 text-textColor-25">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <h2 className="pr-2 text-xl font-medium text-textColor-50">
                                      {info.type}
                                    </h2>
                                    <VscPerson />
                                    <p className={`text-base font-medium text-textColor-50`}>4</p>
                                  </div>
                                  <p className="text-lg font-medium text-textColor-50">
                                    {info.price}
                                  </p>
                                </div>
                                <p className="flex items-center gap-1 text-base">
                                  {info.distance}
                                  <RxDotFilled className="mt-[0.4rem] text-xs" />
                                  {info.time}
                                </p>
                                <p className="text-sm">{info.ride}</p>
                              </div>
                            </div>
                          ))}
                        </section>
                      </div>
                      <div className={`${isDetailsVisible ? "flex" : "hidden"} px-4 pt-5`}>
                        <button
                          disabled
                          className="w-full rounded-full bg-primary-100 py-3 text-center text-white disabled:bg-secondary-50 disabled:text-black">
                          Get App
                        </button>
                      </div>
                    </div>
                  );
                })}
              </section>
            </section>
          </>
        ))}
    </section>
  );
};

export default ChangeRoute;
