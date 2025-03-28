import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useState } from "react";
import { RxDotFilled } from "react-icons/rx";

export const Filter = () => {
  const [active, setActive] = useState("all");
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("filter") || "all";
  const filterValue = [
    { id: 1, value: "all", active: activeTab === "all" },
    { id: 2, value: "cheapest", active: activeTab === "cheapest" },
    { id: 3, value: "closest", active: activeTab === "closest" },
  ];
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div
      className={
        "flex h-auto w-fit flex-wrap items-center justify-center gap-4 rounded-full bg-secondary-50 p-1"
      }>
      {filterValue.map((item) => (
        <div key={item.id} className="">
          <button
            className={` ${
              item.active ? "bg-white text-textColor-100" : "text-textColor-25"
            } flex w-full items-center justify-center rounded-full px-3 py-1 text-sm capitalize transition-all ease-in`}
            onClick={() => router.replace(`?${createQueryString("filter", item.value)}`)}>
            <RxDotFilled className={`${item.active ? "block" : "invisible"} text-sm`} />
            {item.value}
          </button>
        </div>
      ))}
    </div>
  );
};
