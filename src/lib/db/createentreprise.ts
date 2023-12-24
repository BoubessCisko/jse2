"use server";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { redirect } from "next/navigation";

// create entreprise

export async function createEntreprise(formData: FormData) {

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const location = formData.get("Localite") as string;
  const userId = formData.get("userId") as string;
  const entrepriseType = formData.get("entrepriseType") as string;
  const entrepriseSecteurActivite = formData.get(
    "entrepriseSecteurActivite"
  ) as string;
  const nameContact = formData.get("nameContact") as string;
  const emailContact = formData.get("emailContact") as string;
  const phoneContact = formData.get("phoneContact") as string;
  const price = Number(formData.get("prix"));

 await prisma.entreprise.create({
    data: {
      name,
      description,
      location,
      userId,
      entrepriseType,
      entrepriseSecteurActivite,
      nameContact,
      emailContact,
      phoneContact,
      price,
    },
    });

    redirect("/");
}
