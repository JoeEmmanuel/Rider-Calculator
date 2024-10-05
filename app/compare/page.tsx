import { Metadata } from "next";
import ChangeRoute from "@/components/ChangeRoute";
// import Loader from "@/components/Loader";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "Compare Rides",
};

async function fetch(): Promise<{ message: string }> {
  "use server";
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { message: "API data fetched successfully" };
}
const ComparePrices = async () => {
  return (
    <main>
      <ChangeRoute fetchData={fetch} />
    </main>
  );
};

export default ComparePrices;
