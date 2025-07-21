import React from "react";
import Hero from "../components/Hero";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembers } from "../data/teamMembers";
import { BookOpen, Users, Target, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="À propos de notre cabinet"
        subtitle="Rencontrez l'équipe dédiée à votre réussite"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Notre histoire
              </h2>
              <p className="text-secondary-700 mb-6">
                Fondé en 1995 par Amanda Robertson, notre cabinet est né d'une mission claire : offrir des services juridiques d'exception avec intégrité, dévouement et une approche personnalisée.
              </p>
              <p className="text-secondary-700 mb-6">
                Au cours des 30 dernières années, nous sommes passés d'une petite pratique à une équipe juridique respectée, au service des particuliers et des entreprises de toute la région. Notre succès repose sur notre engagement envers nos clients et notre communauté.
              </p>
              <p className="text-secondary-700">
                Aujourd'hui, Robertson & Associates continue de défendre les valeurs qui nous guident depuis le début : excellence dans la représentation juridique, pratique éthique et défense inébranlable des intérêts de nos clients.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668865/pexels-photo-5668865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bâtiment du cabinet d'avocats"
                className="w-full h-auto rounded-lg shadow-md"
              />

              <div className="absolute -bottom-4 -left-4 bg-primary-700 text-white p-4 rounded shadow-md hidden md:block">
                <p className="font-serif font-bold text-lg">30+ ans</p>
                <p className="text-sm">D'excellence juridique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Nos valeurs fondamentales
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Ces principes guident chaque aspect de notre pratique et de nos relations avec les clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Excellence
              </h3>
              <p className="text-secondary-600">
                Nous visons les plus hauts standards en matière de représentation juridique et de service client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Intégrité
              </h3>
              <p className="text-secondary-600">
                Nous respectons les normes éthiques les plus strictes dans tous les aspects de notre pratique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Orientation client
              </h3>
              <p className="text-secondary-600">
                Nous plaçons les besoins de nos clients au centre et adaptons notre approche à leur situation unique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Innovation
              </h3>
              <p className="text-secondary-600">
                Nous adoptons des approches innovantes pour relever les défis juridiques complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Nos avocats expérimentés apportent une expertise diversifiée et un engagement commun envers l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">
                30+
              </p>
              <p className="text-primary-100">Années d'expérience</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">
                1000+
              </p>
              <p className="text-primary-100">Affaires réussies</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">
                15+
              </p>
              <p className="text-primary-100">Domaines de compétence</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">
                98%
              </p>
              <p className="text-primary-100">Satisfaction client</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
