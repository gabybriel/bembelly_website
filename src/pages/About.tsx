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
        desc=""
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />

      {/* Notre histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Notre Vision, Votre Avenir
              </h2>
              <p className="text-secondary-700 mb-6">
                Après plus de vingt ans à marquer de son empreinte le paysage
                juridique congolais, <b>Maître Roland BEMBELLY</b> a fait le
                choix de fonder un cabinet à l'image de sa pratique : moderne,
                rigoureux et résolument tourné vers l'avenir.
              </p>
              <p className="text-secondary-700 mb-6">
                <b className="text-primary-500">BEMBELLY & ASSOCIES</b> n'est
                pas un cabinet comme les autres. Il est le fruit d'une carrière
                riche, bâtie au contact des plus grands défis judiciaires et
                économiques de la région. C'est la somme de cette expérience, de
                ces succès et de cette expertise reconnue qui est aujourd'hui
                mise au service d'une nouvelle structure, conçue pour être plus
                agile, plus proche de ses clients et parfaitement adaptée aux
                enjeux du monde des affaires contemporain.
              </p>
              <p className="text-secondary-700">
                Notre cabinet est né d'une ambition claire : offrir une
                excellence juridique sur-mesure. Nous ne nous appuyons pas sur
                une longue histoire, nous nous engageons à en écrire une
                nouvelle avec vous.
              </p>
              <br />
              <b>
                <i>
                  Notre mission est de transformer notre héritage d'expertise en
                  votre avantage stratégique.
                </i>
              </b>
            </div>
            <div className="relative">
              <img
                src="images/local.jpeg"
                alt="Bâtiment du cabinet d'avocats"
                className="w-full h-auto rounded-lg shadow-md"
              />

              <div className="absolute -bottom-4 -left-4 bg-primary-700 text-white p-4 rounded shadow-md hidden md:block">
                <p className="font-serif font-bold text-lg">20+ ans</p>
                <p className="text-sm">
                  d'expérience, Tourné vers votre succès.
                </p>
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
              Ces principes sont le socle de notre identité et de notre
              engagement envers chaque client. Ils traduisent une vision du
              droit comme levier d’actions concrètes, adaptées aux réalités
              africaines et tournées vers l’accomplissement des objectifs de nos
              partenaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Excellence
              </h3>
              <p className="text-secondary-600">
                Nous visons l’excellence dans chaque dossier, en combinant
                rigueur juridique, connaissance approfondie des contextes locaux
                et engagement total. Notre exigence se reflète dans la qualité
                de nos conseils et de notre accompagnement stratégique.
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
                La confiance est au coeur de notre pratique. Nous cultivons une
                transparence totale et respectons les normes éthiques les plus
                élevées, en défendant avec conviction les intérêts de nos
                clients, dans le respect du droit et de la dignité.
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
                Nous plaçons nos clients au centre de toutes nos réflexions.
                Chaque situation est unique, chaque objectif mérite une approche
                sur mesure. Nous construisons des solutions juridiques
                personnalisées, en phase avec les ambitions économiques,
                sociales et culturelles de ceux que nous accompagnons.
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
                Dans un monde en transformation, nous croyons à l’agilité
                juridique. Nous mobilisons des outils innovants, des méthodes
                d’analyse stratégique et une veille constante pour relever les
                défis complexes que posent les économies africaines
                contemporaines
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
              L’humain est au coeur de notre cabinet. Nos avocats sont bien plus
              que des juristes : ce sont des partenaires engagés dans la
              réalisation des ambitions économiques, sociales et idéologiques de
              nos clients.
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
