"use client";

import { useFormStatus } from "react-dom"

const CessionFormButton = () => {
    const {pending } = useFormStatus()
  return (
    <div>
             <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    {pending ? "Une minute...." : "Soumettre"}
            </button>
    </div>
  )
}

export default CessionFormButton
