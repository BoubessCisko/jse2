import AddCompany from "@/components/forms/addCompany";
import { Suspense } from "react";
import Loading from "./loading";


const Cession = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <AddCompany/>
        </Suspense>
    </div>
  );
};

export default Cession;
