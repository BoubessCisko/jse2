import Image from "next/image";
import Link from "next/link";
import { SignOutButton, currentUser } from "@clerk/nextjs";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className=" sticky top-0 z-10 navbar bg-base-200 border-[1px] border-gray-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Cession</a>
            </li>
            <li>
              <a>Reprise</a>
            </li>
            <li>
              <a>Partenariat</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        {/* mettre le nouveau lien du navbar */}
        <div className="flex  btn btn-ghost hover:bg-white ">
          <Link href={"/"}>
            <Image
              className="object-cover "
              alt="logo"
              src="/logo@2x.png"
              width={50}
              height={50}
            />
          </Link>
          <div className="flex flex-col ">
            <Link href={"/"}>
              <div className="font-extrabold text-white bg-blue-600 text-4xl">
                JSE
              </div>
            </Link>
            <b className="text-xs font-normal text-black ">
              Créateur de richesses
            </b>
          </div>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/cession"} className=" text-xl hover:bg-slate-900 hover:border-gray-700 hover:text-white">Cession</Link>
          </li>
          <li>
            <Link href={"/reprise"} className=" text-xl hover:bg-slate-900 hover:border-gray-700 hover:text-white">Reprise</Link>
          </li>
          <li>
            <Link href={"/partenariat"} className=" text-xl hover:bg-slate-900 hover:border-gray-700 hover:text-white">Partenariat</Link>
          </li>
          <li>
            <Link href={"/services"} className=" text-xl hover:bg-slate-900 hover:border-gray-700 hover:text-white">Services</Link>
          </li>
          <li>
            <Link href={"/contact"} className=" text-xl hover:bg-slate-900 hover:border-gray-700 hover:text-white">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Mettre la logique de connexion ici */}
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
                  src={user?.imageUrl ? user.imageUrl : "/user.png"}
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
                <SignOutButton />
              </li>
            </ul>
          </div>
        )}

        {!user && (
          <Link href={"/sign-in"}>
            <b className="p-2 bg-blue-800 text-white border-[1px] rounded-lg hidden md:block ">
              se connecter
            </b>
            <b className="p-2 bg-blue-800 text-white border-[1px] rounded-lg sm:block md:hidden ">
              C
            </b>
            
          </Link>
        )}
      </div>
      {/* <a className="btn">connecter</a> */}
    </div>
  );
  //   <div className=" sticky conatiner mx-auto">
  //     <div className="flex flex-row flex-wrap items-end justify-around text-[40px] text-gray-200">
  // <div className="flex flex-row items-start justify-start mt-10">
  //   <Link href={"/"}>
  //     <Image
  //       className=" w-[80px] h-[80px] object-cover "
  //       alt="logo"
  //       src="/logo@2x.png"
  //       width={50}
  //       height={50}
  //     />
  //   </Link>
  //   <div className="flex flex-col items-center justify-center">
  //     <Link href={"/"}>
  //       <div className="font-extrabold text-white bg-blue-600">JSE</div>
  //     </Link>
  //     <b className="text-sm text-gray-500 mt-1">Créateur de richesses</b>
  //   </div>
  // </div>

  //       <div className="flex flex-row flex-wrap items-center justify-between gap-4 text-[15px] text-black font-inter">
  //         <Link href={"/cession"}>

  //           <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
  //             Cession
  //           </b>
  //         </Link>
  //         <Link href={"/reprise"}>

  //           <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-6">
  //             Reprise
  //           </b>
  //         </Link>
  //         <Link href={"/partenrariat"}>
  //           <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
  //             Partenariat
  //           </b>
  //         </Link>
  //         <Link href={"/services"}>
  //           <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
  //             Nos Services
  //           </b>
  //         </Link>
  //         <Link href={"/contact"}>
  //           <b className="p-2 bg-black text-white border-[1px] rounded-lg hover:p-4">
  //             Contact
  //           </b>
  //         </Link>
  //        {user &&  (
  //         <div className="dropdown dropdown-end">
  //           <div
  //             tabIndex={0}
  //             role="button"
  //             className="btn btn-ghost btn-circle avatar"
  //           >
  //             <div className="w-10 rounded-full">
  //               <Image
  //                 alt="user Picture"
  //                 src={user?.imageUrl? user.imageUrl : "/user.png"}
  //                 width={40}
  //                 height={40}
  //               />
  //             </div>
  //           </div>
  //           <ul
  //             tabIndex={0}
  //             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
  //           >
  //             <li>
  //               <a className="justify-between">
  //                 Profile
  //                 <span className="badge">New</span>
  //               </a>
  //             </li>
  //             <li>
  //               <a>Settings</a>
  //             </li>
  //             <li>
  //             <SignOutButton/>
  //             </li>
  //           </ul>
  //         </div>
  //         )}

  //        { ! user && ( <Link href={"/sign-in"}>
  //           <b className="p-2 bg-blue-800 text-white border-[1px] rounded-lg hover:p-4">
  //             se connecter
  //           </b>
  //         </Link>
  //         )}

  //       </div>
  //     </div>
  //   </div>
  // );
}
