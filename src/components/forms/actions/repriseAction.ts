import prisma from "@/lib/db/prisma"

const RepriseAction = () => {

    const entreprises = prisma.entreprise.findMany({
        select: {
            nomentrerpise: true,
            location: true,
            entrpriseType: true,
            secteur: true,
            description: true,
            nameContact: true,
            emailContact: true,
            phoneContact: true,
            price: true,
            user_id: true, // user_ID from Auth0
        },
    })




}

export default RepriseAction
