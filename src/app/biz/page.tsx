import Animated from "@/components/UI/animated";
import AjouterEntreprise from "@/components/forms/AjouterEntreprise";
import AddCompany from "@/components/forms/addCompany";
import Image from "next/image";
import Link from "next/link";

export default async function CreateBiz() {
  return (
    <div className="w-6xl mx-8 bg-red-900">
      <nav className="flex flex-row items-baseline justify-between ">
        <div className="flex ">
          <Image src={"/logo@2x.png"} alt="logo" width={70} height={70} />
          <div className="flex flex-col items-center justify-center">
            <Link href={"/"}>
              <div className="font-extrabold text-white bg-blue-600 text-5xl">JSE</div>
            </Link>
            <b className="text-xs text-gray-500 mt-1">Créateur de richesses</b>
          </div>
        </div>
        <div>
        <ul className="flex gap-4">
          <li className="px-2 pt-4 bg-white pb-0">
            Cession
          </li>
          <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
            Reprise
          </li>
          <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
            Partenariat
          </li>
          <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
            Equipe
          </li>
          <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
            Contact
          </li>
        </ul>
        </div>
        <div className="items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
          connexion
        </div>
      </nav>
    </div>
  );
}
