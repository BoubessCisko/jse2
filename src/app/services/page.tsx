import Link from "next/link"


const Service = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Notre équipe à votre service</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Nous nous engageons à offrir des services exceptionnels, personnalisés selon vos besoins, afin de vous garantir une expérience unique et satisfaisante à chaque étape de notre collaboration..</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Evaluation</h2>
            <p className="leading-relaxed text-base">L&apos;évaluation minutieuse des entreprises est une étape cruciale dans notre démarche. Nous adoptons une approche holistique, analysant non seulement les aspects financiers, mais aussi la culture d&apos;entreprise, la gestion des ressources humaines, l&apos;innovation, la durabilité et la conformité réglementaire. Notre équipe d&apos;experts se consacre à fournir une évaluation complète, permettant aux entreprises de prendre des décisions éclairées et de maximiser leur potentiel de croissance. En combinant expertise technique, méthodologies avancées et compréhension approfondie du marché, nous vous aidons à comprendre les forces et les faiblesses de votre entreprise, facilitant ainsi la prise de décisions stratégiques éclairées pour un succès à long terme.</p>

          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Cession</h2>
            <p className="leading-relaxed text-base">La cession d&apos;entreprise est une étape stratégique majeure qui requiert une approche réfléchie et professionnelle. À travers notre processus de cession, nous œuvrons à maximiser la valeur de votre entreprise tout en assurant une transition fluide pour toutes les parties impliquées. Notre équipe dédiée de spécialistes en cession d&apos;entreprise guide chaque étape du processus, depuis l&apos;évaluation initiale jusqu&apos;à la conclusion de la transaction. Nous nous efforçons de comprendre vos objectifs, de valoriser vos actifs de manière équitable et de trouver des partenaires potentiels alignés avec votre vision. Que ce soit pour une cession partielle ou totale, nous sommes engagés à vous accompagner avec professionnalisme et confidentialité pour atteindre le meilleur résultat possible dans cette phase importante de votre parcours entrepreneurial.</p>

          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Partenariat</h2>
            <p className="leading-relaxed text-base">La recherche de partenariat est un processus stratégique qui ouvre des opportunités significatives pour la croissance et le succès à long terme d&apos;une entreprise. Chez [Nom de votre entreprise], nous comprenons l&apos;importance cruciale de trouver les partenaires adéquats qui partagent notre vision et nos valeurs. Notre approche proactive et ciblée vise à établir des collaborations fructueuses en identifiant des partenaires stratégiques dans des secteurs complémentaires. Nous mettons l&apos;accent sur la création de synergies mutuelles, favorisant l&apos;innovation, la croissance des activités et l&apos;expansion des opportunités commerciales. Notre équipe dédiée à la recherche de partenariat s&apos;engage à explorer de nouvelles voies stratégiques, à établir des relations solides et à catalyser le développement mutuel avec des partenaires qui contribuent de manière significative à notre réussite commune.</p>

          </div>
        </div>
      </div>
      <Link href={"/contact"} className="flex  w-fit items-center mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</Link>
    </div>
  </section>)
}

export default Service