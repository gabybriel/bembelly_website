import React from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="w-7 h-7 text-primary-500" />
              <span className="font-serif text-xl font-bold">
                BEMBELLY & ASSOCIES
              </span>
            </div>
            <p className="text-secondary-300 mb-4">
              Fournir des services juridiques d'exception avec intégrité et dévouement depuis 1995.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Services", "Contact"].map((item, idx) => (
                <li key={item}>
                  <Link
                    to={idx === 0 ? "/" : `/${item.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/ /g, '')}`}
                    className="text-secondary-300 hover:text-primary-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Nos services
            </h3>
            <ul className="space-y-2">
              {[
                "Droit des sociétés",
                "Contentieux",
                "Immobilier",
                "Droit de la famille",
                "Propriété intellectuelle",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-secondary-300 hover:text-primary-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-white">
              Contactez-nous
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-secondary-300">
                8e étage Tour Mayombe
                - Pointe-Noire
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                <a
                  href="tel:+242057491517"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  (+242) 05 749 15 17/ 06 688 62 79
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-500 mr-2" />
                <a
                  href="mailto:contact@avocat-bembelly.com"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  contact@avocat-bembelly.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-secondary-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Bembelly & Associés. Tous droits réservés.
          </p>
          <div className="mt-2 md:mt-0">
            <Link
              to="/privacy"
              className="text-secondary-400 text-sm hover:text-primary-500 transition-colors mx-2"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/terms"
              className="text-secondary-400 text-sm hover:text-primary-500 transition-colors mx-2"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
