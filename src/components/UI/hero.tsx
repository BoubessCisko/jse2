import Image from "next/image"
import Animated from "./animated"
import Link from "next/link"


const Hero = () => {
  return (
    <section className="text-gray-600 font-Montserrat">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-7xl text-3xl mb-4  text-gray-900 font-extrabold">Achetez ou vendez votre entreprise au Sénégal en un <span className="text-gray-600">click!</span> </h1>
      <p className=" text-2xl mb-8 leading-relaxed">JOLOF STOCK EXCHANGE (JSE) est une plateforme idéale pour l'achat et la vente d'entreprises. Une équipe efficace et des experts internationaux dans les domaines de l'évaluation et la vente d'entreprise au Sénégal vous y attendent.</p>
      <div className=" w-full flex flex-wrap flex-row justify-between">
        <Link  href={"/reprise"} className="rounded-3xs bg-darkolivegreen text-white text-[40px] p-2 rounded-md">Achat</Link>
        <Link  href={"/cession"}className="rounded-3xs bg-black text-white text-[40px] p-2 rounded-md" >Vente</Link>
    </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded"
       alt="hero" 
       src="/rectangle-1@2x.png"
       width={760}
       height={600}/>
    </div>
  </div>
  <div className="container mx-auto mt-8">
    <Animated/>
  </div>
  <section className="text-gray-600 font-Montserrat">
  <div className="container mt-8 px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Pour les Investissseurs &  Repreneurs</h2>
            <p className="leading-relaxed text-base">Recherche de niches d'opportunités d'investissements . Evaluation des entreprises .Conseils.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Plus de details...<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Pour les Cédants</h2>
            <p className="leading-relaxed text-base">Recherche de partenaires et d'investisseurs. Accompagnement dans la vente. Conseils.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Plus de details...
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">

      <h1 className="sm:text-3xl font-medium title-font mb-4 text-3xl text-gray-900">Aperçu de nos services </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-justify text-2xl">Notre offre comprend des formations approfondies en évaluation d'entreprise et des masterclasses exclusives pour les cédants et les investisseurs, visant à renforcer vos compétences et à vous guider à travers les intrications du marché. De plus, notre équipe expérimentée propose des services d'évaluation d'entreprise, fournissant des analyses approfondies pour maximiser la valeur de votre investissement. Nous sommes également fiers de présenter nos services de conseils en placements, où nos experts vous accompagnent dans la prise de décisions éclairées pour optimiser votre portefeuille. Enfin, notre engagement envers la croissance et l'innovation se reflète dans nos services de recherche d'opportunités d'affaires et de partenaires, conçus pour vous connecter à des possibilités prometteuses. Explorez notre aperçu de services et découvrez comment la JSE peut être votre partenaire de confiance dans la réalisation de vos objectifs financiers et commerciaux.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Formation</h2>
        <p className="leading-relaxed text-base text-justify mb-4">conçus pour guider les cédants et les investisseurs à travers le processus complexe d'évaluation d'entreprise. Nos formations offrent une immersion approfondie dans les stratégies d'achat et de vente, fournissant des compétences essentielles pour naviguer avec succès dans le monde dynamique des transactions commerciales. Les participants auront accès à des cours pratiques et interactifs dispensés par des experts chevronnés de l'industrie, ainsi qu'à des masterclasses exclusives. Que vous soyez un cédant cherchant à maximiser la valeur de votre entreprise ou un investisseur désireux de prendre des décisions éclairées, nos programmes de formation sont conçus pour vous doter des connaissances et des compétences nécessaires pour prospérer sur le marché financier. Rejoignez-nous dans cette expérience éducative exceptionnelle et transformez vos ambitions commerciales en réalité.</p>
        <a className="text-indigo-500 inline-flex items-center">Plus de details... <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Evaluation</h2>
        <p className="leading-relaxed text-base text-justify mb-4">Notre équipe dédiée de professionnels chevronnés vous accompagnera tout au long du processus d'évaluation, offrant une analyse approfondie et des perspectives stratégiques pour maximiser la valeur de votre entreprise. Que vous soyez un cédant cherchant à déterminer le juste prix de vente ou un investisseur éclairé évaluant une opportunité d'acquisition, nos services d'évaluation sont conçus pour répondre à vos besoins spécifiques. Grâce à des méthodologies avancées et à une compréhension approfondie des marchés financiers, nous nous engageons à fournir des évaluations précises et fiables.</p>
        <a className="text-indigo-500 inline-flex items-center">Plus de details... <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Conseils en placements</h2>
        <p className="leading-relaxed text-base text-justify mb-4">Les ervices de conseils en placements offerts par la Jolof Stock Exchange (JSE), votre partenaire de confiance dans la prise de décisions financières éclairées. Notre équipe expérimentée de conseillers en placements est déterminée à vous guider vers des choix stratégiques et rentables. Que vous soyez un investisseur débutant ou chevronné, nos conseils personnalisés sont conçus pour aligner vos objectifs financiers avec des stratégies de placement judicieuses. Nous vous offrons une analyse approfondie des tendances du marché, des conseils sur la diversification de votre portefeuille et des recommandations basées sur une compréhension approfondie de votre profil financier.</p>
        <a className="text-indigo-500 inline-flex items-center">Plus de details... <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Recherche d'opportunites d'affaires et de partenaires</h2>
        <p className="leading-relaxed text-base  text-justify mb-4">Découvrez de nouvelles perspectives commerciales avec les services de recherche d'opportunités d'affaires et de partenaires de la Jolof Stock Exchange (JSE). Notre équipe dévouée met à votre disposition une expertise approfondie pour identifier des opportunités stratégiques, que vous soyez un entrepreneur en quête d'expansion ou une entreprise cherchant des partenariats profitables. Grâce à une approche méthodique et à des analyses approfondies du marché, nous vous offrons un accès privilégié à des opportunités d'investissement, des alliances stratégiques et des partenaires commerciaux potentiels. Que vous envisagiez une croissance organique ou que vous cherchiez des partenariats clés, nos services de recherche sont conçus pour vous connecter aux opportunités qui correspondent à votre vision d'affaires.</p>
        <a className="text-indigo-500 inline-flex items-center">Plus de details... <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
  </div>
</section>
</section>

  )
}

export default Hero
