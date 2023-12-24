import { entreprise } from "@prisma/client";
import Link from "next/link";

const Cardentreprise = (props: { entreprise: entreprise }) => {
  return (


    <div className="w-container mx-40 mt-5 border-[1px] shadow-xl rounded-md border-gray-200">

      <div className="titre flex flex-row justify-between">
        <div>
          <h1 className="text-3xl font-semibold">
            <span className="text-sm text-gray-400"> Raison Sociale: </span>{" "}
            {props.entreprise.nomentrerpise}
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-gray-600">
            <span className="underline font-semibold">Secteur:</span>
            {props.entreprise.secteur}
          </h1>
          <h1 className="text-gray-600">
            <span className="underline font-semibold">Type:</span>
            {props.entreprise.entrpriseType}
          </h1>
        </div>
      </div>
      <div className="body bg-white">
        <h2 className="text-justify">{props.entreprise.description}</h2>
      </div>
      <div className="foot ">
        <div className="p-2  flex flex-row justify-between">
          <h1 className="text-2xl text-blue-800 font-bold">
            {Number(props.entreprise.price).toLocaleString() + "  CFA"}
          </h1>
          <div>
            <Link
              className="text-2xl text-gray-600 font-bold border-[1px]"
              href={"./reprise/" + props.entreprise.entreprise_id}
            >
              Details...
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Cardentreprise;
