import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { ArrowRight, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // Use just a few services for the homepage
  const featuredServices = services.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Des avocats à votre écoute, engagés pour vos droits"
        subtitle="Chez BEMBELLY & ASSOCIÉS, nous croyons qu’un conseil juridique efficace commence par une vraie relation de confiance."
        desc="Notre équipe accompagne chacun de ses clients avec expertise, clarté et humanité. Que vous soyez un particulier, une entreprise ou une institution, nous nous mobilisons pour défendre vos intérêts et construire des solutions pérennes."
        backgroundImage="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="full"
      />
      {/* Section Inncun 
      <section>
        <p>
          Notre équipe accompagne chacun de ses clients avec expertise, clarté
          et humanité. Que vous soyez un particulier, une entreprise ou une
          institution, nous nous mobilisons pour défendre vos intérêts et
          construire des solutions pérennes.
        </p>
      </section>*/}

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-5">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                <b className="text-red-600">BEMBELLY & ASSOCIÉS</b> — Vos
                avocats-conseils pour un droit utile et humain
              </h2>
              <p className="text-secondary-700 mb-6 text-lg font-serif">
                Un cabinet nouvellement ouvert, une expertise qui ne date pas
                d’hier. Chez BEMBELLY & ASSOCIÉS, nous réunissons des
                avocats-conseils issus de parcours juridiques variés, animés par
                un même engagement : rendre le droit accessible, pertinent et
                stratégique pour chacun de nos clients.
              </p>
              <p className="text-secondary-700 mb-8">
                Fondé par des juristes expérimentés ayant exercé en entreprise,
                en cabinet et en juridiction, notre cabinet met au coeur de son
                approche la compréhension fine des enjeux réels auxquels vous
                êtes confronté·e.
              </p>
              <div className="flex flex-wrap gap-2"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-full pl-0 sm:pl-12">
                <img
                  src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Law office"
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-secondary-700 text-lg items-center px-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                Ce qui nous distingue
              </h3>

              <p>
                <ul className="list-disc">
                  <li>
                    <b>Conseil juridique personnalisé</b> : nous ne livrons pas
                    de réponses toutes faites, mais des solutions pensées pour
                    vous, à partir d’une analyse rigoureuse de votre situation.
                  </li>
                  <li>
                    <b>Relation de proximité </b>: ici, chaque client est écouté
                    avec attention et respect. Nous croyons à une collaboration
                    ouverte, transparente et durable.
                  </li>
                  <li>
                    <b>Expertise transversale </b>: droit des affaires, droit
                    social, droit de la famille, contentieux… Notre maîtrise de
                    plusieurs branches du droit nous permet d’avoir une vision
                    globale et stratégique.
                  </li>
                  <li>
                    <b>Orientation vers l’action</b> : nous traduisons le droit
                    en décisions utiles, compréhensibles, et applicables dans
                    votre quotidien ou votre organisation.
                  </li>
                </ul>
              </p>
            </div>
            <div className="px-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
                À qui nous nous adressons
              </h3>
              <p>
                <ul className="list-disc">
                  <li>
                    <b>Entreprises et entrepreneurs</b>: sécurisation de vos
                    contrats, structuration juridique, gestion des conflits
                  </li>
                  <li>
                    <b>Particuliers</b> : accompagnement en droit de la famille,
                    successions, litiges civils
                  </li>
                  <li>
                    <b>Institutions et ONG </b>: conseil réglementaire,
                    protection juridique, gouvernance
                  </li>
                </ul>
                <br />
                <b>
                  <i>
                    <span className="text-red-500">BEMBELLY & ASSOCIÉS</span>,
                    un cabinet jeune aux racines solides, pensé pour bâtir avec
                    vous une relation de confiance et une stratégie juridique
                    qui a du sens
                  </i>
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Pourquoi choisir BEMBELLY & ASSOCIES
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Des avocats-conseils stratégiques au coeur de vos enjeux
              juridiques. <br />
              Notre cabinet s’illustre par une alliance rare entre expérience,
              réactivité et engagement humain. Fondé par des avocats-conseils
              aguerris, nous vous apportons une vision pratique et stratégique
              du droit, adaptée aux dynamiques économiques et institutionnelles
              d’aujourd’hui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Une équipe d’avocats expérimentés
              </h3>
              <p className="text-secondary-700">
                Nos professionnels cumulent des décennies d’expertise dans des
                environnements variés : cabinets internationaux, entreprises,
                administration publique… Une richesse de parcours au service de
                vos projets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Un service reconnu pour son excellence
              </h3>
              <p className="text-secondary-700">
                Notre approche rigoureuse, centrée sur les résultats, est saluée
                par nos clients et nos partenaires. La fidélité et les
                témoignages de ceux que nous accompagnons sont notre meilleure
                référence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Une communication fluide et réactive
              </h3>
              <p className="text-secondary-700">
                Nous privilégions une relation transparente et directe. Chaque
                dossier bénéficie d’un suivi attentif, avec des réponses
                claires, rapides et ajustées à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Droit des Sociétés & Gouvernance
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Nous accompagnons les entreprises locales et internationales à
              chaque étape de leur développement, en assurant sécurité
              juridique, stratégie et conformité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
            >
              Voir tous les services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Ce que nous partageons avec vous
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              <i>
                Publications, conférences, et engagements de Maitre BEMBELLY
              </i>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <p>
              Chez BEMBELLY & ASSOCIÉS, notre engagement dépasse le cadre du
              cabinet. Maitre BEMBELLY s’implique activement dans la diffusion
              du savoir juridique, l’analyse des évolutions du droit, et le
              dialogue avec les professionnels et les citoyens.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Planifiez une consultation avec notre équipe pour discuter de vos
            besoins juridiques et comment nous pouvons vous aider.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors"
          >
            Contactez-nous dès aujourd'hui
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
