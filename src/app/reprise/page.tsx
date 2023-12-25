import Pagination from "@/components/UI/pagination";
import Cardentreprise from "@/components/cardentreprise";
import prisma from "@/lib/db/prisma";

import { auth, currentUser } from "@clerk/nextjs";
import { entreprise } from "@prisma/client";
import Link from "next/link";

interface ListEntrepriseProps {
  searchParams: { page: string };
}

export default async function ListEntreprise({
  searchParams: { page = "1" },
}: ListEntrepriseProps) {
  //pagination stuff
  const currentPage = parseInt(page);
  const page_Size = 10;

  const totlaItemCount = await prisma.entreprise.count();
  const totalPages = Math.ceil(totlaItemCount / page_Size);

  // end if pagination stuff

  let listEnts = [];

  try {
    const etps = await prisma.entreprise.findMany({
      take: page_Size,
      skip: (currentPage - 1) * page_Size,
      orderBy: {
        created_at: "desc",
      },
    });

    listEnts = etps;
  } catch (error) {
    return (
      <div className="text-center">Erreur de connection avec les donnees!</div>
    );
  }

  return (
    <div className=" container mx-auto mt-10">
      <h1 className="sm:text-2xl font-bold title-font mb-4  text-gray-500 text-2xl text-center">
        Liste des entreprises en vente.
        <br />
      </h1>
      {listEnts.map((ent) => (
        <div key={ent.user_id} className="grid grid-col-1">
          <Cardentreprise entreprise={ent} />
        </div>
      ))}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
