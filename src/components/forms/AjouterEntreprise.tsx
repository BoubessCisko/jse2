import { createEntreprise } from "@/lib/db/createentreprise";


export default function AjouterEntreprise() {
  return (
    <div className=" bg-gray-300 flex flex-wrap justify-center items-center mt-5">
      {/* <div className="bg-gray-300 w-[15%]"></div>  */}
      <div className="bg-white w-[60%] shadow-xl border-gray-400 rounded-md my-1 h-4/6">
        <h1 className="text-2xl font-bold text-center bg-slate-300">
          Ajouter une Entreprise
        </h1>
        <hr className="bg-gray-700 mt-3"></hr>
        <form action={createEntreprise}>
        <label className="mt-3 font-extrabold" htmlFor="name">
            UserID:
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="w-full"
            placeholder="Id du user temporaire .."
          />
          <label className="mt-3 font-extrabold" htmlFor="name">
            Nom de l'entreprise:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full"
            placeholder="Le nom du l'entreprise.."
          />
          <label className="mt-3 font-extrabold" htmlFor="description">
            Decrire votre entreprise:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full"
            placeholder="Description complete du l'entreprise"
          />
          <label className="mt-3 font-extrabold" htmlFor="location">
            Localite
          </label>
          <input
            type="text"
            id="Localite"
            name="Localite"
            className="w-full"
            placeholder="Quelle est votre Region .."
          />
          <label className="mt-3 font-extrabold" htmlFor="prix">
            Prix
          </label>
          <input
            type="number"
            id="prix"
            name="prix"
            className="w-full"
            placeholder="Le Prix demande .."
          />
          <label className="mt-3 font-extrabold" htmlFor="entrepriseType">
            Statut de l'entreprise
          </label>
          <select
            id="entrepriseType"
            name="entrepriseType"
            className="mt-3 font-medium text-slate-400 w-full"
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
          <label
            className="mt-3 font-extrabold"
            htmlFor="entrepriseSecteurActivite"
          >
            Secteur
          </label>
          <select
            id="entrepriseSecteurActivite"
            name="entrepriseSecteurActivite"
            className="mt-3 font-medium text-slate-400 w-full"
          >
            <option>Choisir un secteur...</option>
            <option>Industrie_manufacturiere</option>
            <option>Commerce_de_detail</option>
            <option>Agriculture</option>
            <option>Commerce_de_Gros</option>
            <option>Services</option>
            <option>TIC</option>
            <option>Finances</option>
            <option>Energies</option>
            <option>transport_et_logistique</option>
            <option>Immobilier</option>
            <option>AgroAlimentaire</option>
            <option>Tourisme</option>
            <option>Sante</option>
            <option>Autre</option>
          </select>
          <hr className="bg-gray-700 mt-3"></hr>
          <label className="mt-3 font-extrabold" htmlFor="nameContact">
            Le nom du Contact
          </label>
          <input
            type="text"
            id="nameContact"
            name="nameContact"
            className="w-full"
            placeholder="Le Nom du Contact de L'entrepise .."
          />
          <label className="mt-3 font-extrabold" htmlFor="emailContact">
            Email du Contact
          </label>
          <input
            type="text"
            id="emailContact"
            name="emailContact"
            className="w-full"
            placeholder="Email du Contact ..."
          />
          <label className="mt-3 font-extrabold" htmlFor="phoneContact">
            Telephone du Contact
          </label>
          <input
            type="text"
            id="phoneContact"
            name="phoneContact"
            className="w-full"
            placeholder="Telephone du contact .."
          />
          <hr className="bg-gray-700 mt-3"></hr>
          <div className="flex justify-between mt-3">
            <button type="submit" className="bg-black p-3 text-white m-3">
              Soumettre
            </button>
            <button className="bg-black p-3 text-white m-3"> Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
}
