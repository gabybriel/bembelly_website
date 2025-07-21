import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contactez-nous"
        subtitle="Contactez notre équipe juridique"
        backgroundImage="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="small"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-secondary-900 mb-6">
                Entrer en contact
              </h2>
              <p className="text-secondary-700 mb-8">
                Nous sommes là pour répondre à tous vos besoins juridiques. Contactez-nous dès aujourd'hui pour planifier une consultation avec l'un de nos avocats expérimentés.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 mr-4">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-secondary-900 mb-1">
                      Notre bureau
                    </h3>
                    <p className="text-secondary-700">
                     8e étage Tour Mayombe,
                      <br />
                      243 Boulevard Charles De Gaule - Pointe-Noire
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 mr-4">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-secondary-900 mb-1">
                      Téléphone
                    </h3>
                    <p className="text-secondary-700">
                      <a
                        href="tel:+242057491517"
                        className="hover:text-primary-700 transition-colors"
                      >
                        (+242) 05 749 15 17/ 06 688 62 79 
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 mr-4">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-secondary-900 mb-1">
                      Email
                    </h3>
                    <p className="text-secondary-700">
                      <a
                        href="contact@avocat-bembelly.com"
                        className="hover:text-primary-700 transition-colors"
                      >
                        contact@avocat-bembelly.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50 mr-4">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-secondary-900 mb-1">
                      Horaires d'ouverture
                    </h3>
                    <p className="text-secondary-700">
                      Lundi - Vendredi : 9h00 - 18h00
                      <br />
                      Samedi : 10h00 - 14h00
                      <br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-secondary-200 pt-6">
                <h3 className="font-serif text-lg font-bold text-secondary-900 mb-3">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-white">
        <div className="h-96 w-full">
          <iframe
            title="Carte de localisation du bureau"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.658063344166!2d11.850825500000001!3d-4.796539499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a60a52ee8f50263%3A0xb59b78748584124a!2sTour%20Mayombe%2C%20Av.%20Charles%20de%20Gaulle%2C%20Pointe-Noire!5e1!3m2!1sfr!2scg!4v1753084785031!5m2!1sfr!2scg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
