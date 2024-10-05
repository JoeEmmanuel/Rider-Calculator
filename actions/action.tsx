"use server";
import { LocationSchemaType } from "@/components/HomeSection";
import { redirect } from "next/navigation";

export async function create(formData: LocationSchemaType) {
  console.log(formData, ": Route Form Data");

  // *make a API call to fetch the ride data
  const res = true; // *change this to fetch the ride data

  // *if there is no response or no avaliable ride for that location redirect the user to the no ride found pade
  if (!res) {
    redirect("/noRides");
  }
  // else redirect to the compare rides page
  redirect("/compare");
}
