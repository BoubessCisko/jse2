
import { useFormStatus } from "react-dom";

const AddCompanyButton = () => {
    const {pending } = useFormStatus()

  return (
    <div>
      <button
        typeof="submit"
        className="bg-black p-2 text-white mt-3 font-bold w-full align-middle"
      >
        {pending ? "Soumission en cours...." : "Soumettre"}
      </button>
    </div>
  );
};

export default AddCompanyButton;
