import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { ArrowRight, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Use just a few services for the homepage
  const featuredServices = services.slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="L'excellence juridique avec une touche personnelle"
        subtitle="Des avocats dévoués qui s'engagent à protéger vos droits et à atteindre vos objectifs."
        backgroundImage="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="large"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Conseillers juridiques de confiance depuis 1995
              </h2>
              <p className="text-secondary-700 mb-6 text-lg">
                Chez <b className="text-danger">BEMBELLY & ASSOCIES</b>, nous allions expertise juridique et approche client. Notre équipe d'avocats expérimentés s'engage à vous proposer des solutions pratiques et adaptées à vos besoins spécifiques.
              </p>
              <p className="text-secondary-700 mb-8">
                Que vous soyez confronté à une transaction commerciale complexe, que vous traversiez un conflit familial ou que vous planifiiez l'avenir, nous vous fournissons les conseils et le soutien dont vous avez besoin pour atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                >
                  En Savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 border border-secondary-300 text-secondary-900 font-medium rounded-md hover:bg-secondary-50 transition-colors"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 pl-0 sm:pl-12">
                <img 
                  src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Law office" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="pl-4 sm:pl-20 -mt-12">
                <img 
                  src="https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Lawyer working" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="pl-0 sm:pl-4 mt-8 sm:mt-0">
                <img 
                  src="https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Legal consultation" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Pourquoi choisir BEMBELLY & ASSOCIES
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Notre engagement envers l’excellence et la satisfaction de nos clients nous distingue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Équipe expérimentée
              </h3>
              <p className="text-secondary-600">
                Nos avocats apportent des décennies d’expérience combinée dans divers domaines de pratique.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Service primé
              </h3>
              <p className="text-secondary-600">
                Reconnu pour son excellence par ses pairs de l’industrie et ses clients satisfaits.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Clock className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Communication réactive
              </h3>
              <p className="text-secondary-600">
                Nous privilégions une communication claire et rapide tout au long de votre dossier.
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
              Nos services juridiques
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Nous proposons des solutions juridiques complètes dans un large éventail de domaines de pratique.
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
              What Our Clients Say
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Read testimonials from clients who have trusted us with their legal matters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Schedule a consultation with our team to discuss your legal needs and how we can help.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-medium rounded-md hover:bg-primary-50 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
