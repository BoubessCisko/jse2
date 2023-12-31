"use server";

import prisma from "@/lib/db/prisma";
import { currentUser , redirectToSignIn} from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddCompanyAction = async (prevState: any, formData: FormData) => {
  const user =  await currentUser();
 


  if (!user) {
    redirect("/sign-in");
  }
  try {
    const nomentrerpise = formData.get("nomentrerpise") as string;
    const location = formData.get("localite") as string;
    const entrpriseType = formData.get("entrpriseType") as string;
    const secteur = formData.get("secteur") as string;
    const description = formData.get("description") as string;
    const nameContact = formData.get("nameContact") as string;
    const emailContact = formData.get("emailContact") as string;
    const phoneContact = formData.get("phoneContact") as string;
    const price = Number(formData.get("price"));
    const user_id = user.id as string;
 
    await prisma.entreprise.create({
      data: {
        nomentrerpise: nomentrerpise,
        location: location,
        entrpriseType: entrpriseType,
        secteur: secteur,
        description: description,
        nameContact: nameContact,
        emailContact: emailContact,
        phoneContact: phoneContact,
        price: price,
        user_id: user_id, // user_ID from Auth0
      },
    
    });
    return "Le formulaire a ete soumis avec succes!";
  } catch (error) {
    return "Une erreur est survenue lors de la soumission du formulaire";
    
  }
};

export default AddCompanyAction;
