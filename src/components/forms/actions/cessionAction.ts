"use server";
import prisma from "@/lib/db/prisma";

const  cessionAction = async(prevState:any ,formData: FormData) => {

  try {
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const telephone = formData.get("telephone") as string;
  const nom_entreprise = formData.get("nom_entreprise") as string;
  const message = formData.get("message") as string;
  await prisma.contactCedant.create({
    data: {
      name: nom,
      email: email,
      phone: telephone,
      nom_entreprise: nom_entreprise,
      message: message,
    },
    
  });


  return "Le formulaire a ete soumis avec succes!"

  } catch(error) {

    return { error: "Une erreur est survenue lors de la soumission du formulaire" };
  }
 
};

export default cessionAction;
