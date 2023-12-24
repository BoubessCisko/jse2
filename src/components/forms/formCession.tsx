"use client";

import { useRef } from "react";
import cessionAction from "./actions/cessionAction";
import CessionFormButton from "../UI/CessionFormButton";
import { useFormState } from "react-dom";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const FormCession = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(cessionAction, null);
  return (
    <div>
      <form
        ref={ref}
        action={(formdata: FormData) => {
          formAction(formdata);
          ref.current?.reset();
        }}
      >
        <section className="text-gray-600 body-font Monserrat">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl font-bold title-font mb-4 text-gray-900 text-3xl">
                Vous voulez ceder votre affaire ?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Remplir le formulaire ci dessous ou Contacter nous <span className="font-bold underline text-blue-500">+221 33 820 32 32</span> 
              </p>
              <div>
                <span
                  aria-live="polite"
                  className="read-only text-2xl font-semibold text-center text-green-500"
                >
                  {state as string}
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="nom"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nom & Prénom(s)
                    </label>
                    <input
                      required
                      type="text"
                      id="nom"
                      name="nom"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="nom_entrprise"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nom de L'entreprise
                    </label>
                    <input
                      required
                      type="text"
                      id="nom_entrprise"
                      name="nom_entrprise"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="telephone"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Numéro de Téléphone 
                    </label>
                    <input
                      required
                      type="text"
                      id="telephone"
                      name="telephone"
                      className="  w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600 "
                    >
                      Message
                    </label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      className=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <CessionFormButton />
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">jse@jse.sn</a>
                  <p className="leading-normal my-5">
                    Almadies-Dakar.
                    <br />
                    SENEGAL
                  </p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default FormCession;
