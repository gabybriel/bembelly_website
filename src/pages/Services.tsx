import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div>
      {/* Section Hero */}
      <Hero
        title="Nos Services Juridiques"
        subtitle="Des solutions juridiques complètes adaptées à vos besoins"
        backgroundImage="https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Aperçu des Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Solutions Juridiques Complètes
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Notre cabinet propose une large gamme de services juridiques pour
              répondre aux besoins divers des particuliers et des entreprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Phare */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Services Juridiques aux Entreprises
              </h2>
              <p className="text-secondary-700 mb-6">
                Notre équipe en droit des affaires fournit un accompagnement
                complet aux entreprises à chaque étape de leur croissance, des
                startups aux sociétés établies. Nous comprenons les défis
                complexes auxquels les entreprises sont confrontées et proposons
                des solutions juridiques pratiques et axées sur les résultats.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Création d'entreprise et choix de la structure
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Rédaction, révision et négociation de contrats
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Fusions et acquisitions
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Gouvernance d'entreprise et conformité
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary-700 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-secondary-700">
                    Contentieux et résolution de litiges
                  </span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
              >
                Prendre un rendez-vous
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5668897/pexels-photo-5668897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Services de droit des affaires"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Notre Approche
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Nous proposons des solutions juridiques personnalisées adaptées à
              vos besoins et objectifs spécifiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-serif font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Consultation Initiale
              </h3>
              <p className="text-secondary-700">
                Nous commençons par comprendre vos besoins juridiques,
                préoccupations et objectifs lors d'une consultation approfondie.
              </p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-serif font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Élaboration de la Stratégie
              </h3>
              <p className="text-secondary-700">
                Notre équipe développe une stratégie juridique sur mesure conçue
                pour atteindre vos objectifs spécifiques de manière efficace et
                efficiente.
              </p>
            </div>

            <div className="bg-secondary-50 p-6 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-serif font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Mise en Œuvre
              </h3>
              <p className="text-secondary-700">
                Nous mettons en œuvre votre stratégie juridique avec précision,
                en vous tenant informé et impliqué tout au long du processus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-12 bg-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Besoin d'Assistance Juridique ?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour planifier une consultation avec
            l'un de nos avocats expérimentés.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors"
          >
            Nous Contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
