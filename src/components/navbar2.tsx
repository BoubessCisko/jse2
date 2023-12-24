import Animated from "@/components/UI/animated";
//import AjouterEntreprise from "@/components/forms/AjouterEntreprise";
import AddCompany from "@/components/forms/addCompany";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar2() {
  const session = await getSession();
  const user = session?.user;
  return (
    <div className="container  px-4 mx-auto  sticky top-0 z-10 bg-white h-[100px]   border-[1px] border-gray-500 ">
      <nav className="flex flex-row justify-between items-center ">
        <div className="flex items-end">
          <Link href={"/"}>
            <Image src={"/logo@2x.png"} alt="logo" width={50} height={50} className="mt-8" />
          </Link>
          <div className="flex flex-col items-center justify-end">
            <Link href={"/"}>
              <div className="font-extrabold text-white bg-blue-600 text-5xl">
                JSE
              </div>
            </Link>
            <b className="text-xs text-gray-500 mt-1">Créateur de richesses</b>
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link href={"/cession"}>
              <li className=" bg-white border w-fit pt-4 px-4 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                Cession
              </li>
            </Link>
            <Link href={"/reprise"}>
              <li className=" bg-white border w-fit pt-4 px-4 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                Reprise
              </li>
            </Link>
            <Link href={"/partenrariat"}>
              <li className=" bg-white border w-fit pt-4 px-4 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                Partenariat
              </li>
            </Link>
            <Link href={"/services"}>
              <li className=" bg-white border w-fit pt-4 px-4 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                Services
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className=" bg-white border w-fit pt-4 px-4 border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    alt="user Picture"
                    src={user?.picture ? user.picture : "/user.png"}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-1xl"
              >
                <li>
                  <Link href={"/Dashboard"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link
                  href={"/Dashboard"}
                  >Dashboard</Link>
                </li>
                <li>
                  <Link
                  href={"/api/auth/logout"}
                  >Logout</Link>
                </li>
              </ul>
            </div>
          )}
          {!user && (
            <Link href={"/api/auth/login"}>
              <b className="inline-flex items-center gap-x-2.5 pt-4 px-4 text-md font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg hover:bg-slate-900 hover:border-gray-700 hover:text-white">
                se connecter
              </b>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
