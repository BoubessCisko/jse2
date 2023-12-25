import Image from "next/image";
import Link from "next/link";
import { SignOutButton, currentUser } from '@clerk/nextjs';



export default async function Navbar() {
  const user = await currentUser();
 
  return (
    <div className=" sticky conatiner mx-auto">
      <div className="flex flex-row flex-wrap items-end justify-around text-[40px] text-gray-200">
        <div className="flex flex-row items-start justify-start mt-10">
          <Link href={"/"}>
            <Image
              className=" w-[80px] h-[80px] object-cover "
              alt="logo"
              src="/logo@2x.png"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <Link href={"/"}>
              <div className="font-extrabold text-white bg-blue-600">JSE</div>
            </Link>
            <b className="text-sm text-gray-500 mt-1">Créateur de richesses</b>
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-between gap-4 text-[15px] text-black font-inter">
          <Link href={"/cession"}>
          
            <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
              Cession
            </b>
          </Link>
          <Link href={"/reprise"}>
        
            <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-6">
              Reprise
            </b>
          </Link>
          <Link href={"/partenrariat"}>
            <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
              Partenariat
            </b>
          </Link>
          <Link href={"/services"}>
            <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
              Nos Services
            </b>
          </Link>
          <Link href={"/contact"}>
            <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
              Contact
            </b>
          </Link>
         {user &&  (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="user Picture"
                  src={user?.imageUrl? user.imageUrl : "/user.png"}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
              <SignOutButton/>
              </li>
            </ul>
          </div>
          )} 

         { ! user && ( <Link href={"/sign-in"}>
            <b className="p-2 bg-blue-800 text-white border-[1px] rounded-lg hover:p-4">
              se connecter
            </b>
          </Link>
          )}
          
        </div>
      </div>
    </div>
  );
}
