import prisma from "@/lib/db/prisma";




interface DetailsEntrepriseProps {
  params: {
    id: string;
  };
}

export default async function DetailsEntreprise({
  params,
}: DetailsEntrepriseProps) {


  const entreprise = await prisma.entreprise.findUnique({
    where: {
      entreprise_id: params.id,
    },
  });

  return (
    <div>
      <form
      // ref={ref}
      // action={(formdata: FormData) => {
      //   formAction(formdata);
      //   ref.current?.reset();
      // }}
      >
        <section className="text-gray-600 body-font Monserrat ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-start w-full mb-12">
              {/* Create a add Entreprise form  */}
              <h1 className="sm:text-2xl font-bold title-font mb-4  text-gray-500 text-2xl text-center">
                Veuillez procéder à la mise à jour des informations <br />
                de votre entreprise. <br />
                {/* <span
                  aria-live="polite"
                  className=" w-full read-only text-2xl font-semibold text-center text-green-500"
                >
                  {state as string}
                </span> */}
              </h1>
              {/* <div></div> */}

              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="nomentreprise"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nom de l'entreprise
                      </label>
                      <input
                       value={entreprise?.nomentrerpise}
                        required
                        disabled
                        type="text"
                        id="nomentrerpise"
                        placeholder="Nom de l'entreprise"
                        name="nomentrerpise"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="Localite"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Localite
                      </label>
                      <select
                        disabled
                        value={entreprise?.location}
                        id="Localite"
                        name="localite"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      >
                        <option>Chosir une localite... </option>
                        <option value="Dakar">Dakar</option>
                        <option value="Thies">Thies</option>
                        <option value="Diourbel">Diourbel</option>
                        <option value="Fatick">Fatick</option>
                        <option value="Kaolack">Kaolack</option>
                        <option value="Kolda"> Kolda</option>
                        <option value="Louga">Louga</option>
                        <option value="Matam">Matam</option>
                        <option value="St Louis">St Louis</option>
                        <option value="Tambacounda"> Tambacounda</option>
                        <option value="Ziguinchor">Ziguinchor</option>
                        <option value="Kaffrine">Kaffrine</option>
                        <option value="Kedougo">Kedougou</option>
                        <option value="Sedhiou">Sedhiou</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="entrpriseType"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Type d'entreprise
                      </label>
                      <select
                        value={entreprise?.entrpriseType}
                        id="entrpriseType"
                        name="entrpriseType"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      >
                        <option>Chosir un type... </option>
                        <option value="SUARL">SUARL</option>
                        <option value="SA">SA</option>
                        <option value="SARL">SARL</option>
                        <option value="SNC">SNC</option>
                        <option value="SCS">SCS</option>
                        <option value="GIE"> GIE</option>
                        <option value="SAS">SAS</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="secteur"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Secteur
                      </label>
                      <select
                      disabled
                        value={entreprise?.secteur}
                        id="secteur"
                        name="secteur"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      >
                        <option value="Choisir un secteur...">
                          Choisir un secteur...
                        </option>
                        <option value="Industrie_manufacturiere">
                          Industrie_manufacturiere
                        </option>
                        <option value="Commerce_de_detail">
                          Commerce_de_detail
                        </option>
                        <option value="Agriculture">Agriculture</option>
                        <option value="Commerce_de_Gros">
                          Commerce_de_Gros
                        </option>
                        <option value="Services">Services</option>
                        <option value="TIC">TIC</option>
                        <option value="Finances">Finances</option>
                        <option value="Energies">Energies</option>
                        <option value="transport_et_logistique">
                          transport_et_logistique
                        </option>
                        <option value="Immobilier">Immobilier</option>
                        <option value="AgroAlimentaire">AgroAlimentaire</option>
                        <option value="Tourisme">Tourisme</option>
                        <option value="Sante">Sante</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="description"
                        className="leading-7 text-sm text-gray-600 "
                      >
                        Decrire votre entreprise
                      </label>
                      <textarea
                        disabled
                        value={entreprise?.description}
                        required
                        id="description"
                        name="description"
                        className=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>

                  <h1 className="underline text-blue-700">
                    Information Contact
                  </h1>
                  <hr />
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="nameContact"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nom du Contact
                      </label>
                      <input
                        disabled
                        value={entreprise?.nameContact || ''}
                        required
                        type="text"
                        id="nameContact"
                        placeholder="Nom du Contact"
                        name="nameContact"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="emailContact"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email du Contact
                      </label>
                      <input
                        disabled
                        value={entreprise?.emailContact || ""}
                        required
                        type="text"
                        id="emailContact"
                        placeholder="Email du Contact"
                        name="emailContact"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="phoneContact"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Telephone du Contact
                      </label>
                      <input
                        disabled
                        value={entreprise?.phoneContact || ""}
                        required
                        type="text"
                        id="phoneContact"
                        placeholder="Telephone du Contact"
                        name="phoneContact"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="price"
                        className="leading-7 text-sm text-gray-600 "
                      >
                        Prix demande
                      </label>
                      <input
                        disabled
                        value= {Number(entreprise?.price )}
                        required
                        type="number"
                        id="price"
                        placeholder="Prix demande"
                        name="price"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );

}
