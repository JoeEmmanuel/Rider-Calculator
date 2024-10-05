import HomeSection from "@/components/HomeSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rider Calculator",
  description: "Find the Best Ride at the Best Price",
};

export default function Home() {
  return (
    <main className="md:px-16 lg:px-[100px] 2xl:px-40">
      <HomeSection />
    </main>
  );
}
