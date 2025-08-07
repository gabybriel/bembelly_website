import { useParams } from "react-router-dom";
import { equipe } from "../data/equipeData";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import BreadcrumbArea from "../components/BreadcrumbArea";

const MembreDetail = () => {
  const { id } = useParams();
  const membre = equipe.find((m) => m.id.toString() === id);

  if (!membre) return <p>Membre introuvable.</p>;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <BreadcrumbArea
        title={membre.nom}
        backgroundImage="/images/breadcrumb.png"
      />

      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Info principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={membre.photo || "https://via.placeholder.com/520x600"}
              alt={membre.nom}
              className="rounded-xl w-full h-100 object-cover"
            />
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-primary-500">
            <h1 className="text-2xl font-bold text-primary-500 mb-2">
              {membre.nom}
            </h1>
            <p className="text-gray-500 mb-1">{membre.poste}</p>
            <div className="w-10 h-1 bg-blue-600 rounded mb-4"></div>
            {membre.bio ? (
              <p
                className="text-sm text-gray-600 mb-6"
                dangerouslySetInnerHTML={{ __html: membre.bio }}
              />
            ) : (
              <p className="text-sm text-gray-600 mb-6">
                Voici une courte biographie ou un message professionnel du
                membre.
              </p>
            )}

            <div className="flex items-center gap-4 mb-6">
              <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
              <FaPinterestP className="text-gray-500 hover:text-red-600 cursor-pointer" />
            </div>

            <div className="block sm:flex sm:items-center sm:gap-4 text-sm text-gray-600">
              <p className="flex items-center px-2 mb-2 sm:mb-0">
                <FaMapMarkerAlt /> {membre.adresse || "Ville, Pays"}
              </p>
              <p className="flex items-center px-2 mb-2 sm:mb-0">
                <FaPhoneAlt /> {membre.telephone || "+000 000 000"}
              </p>
              <p className="flex items-center px-2">
                <FaEnvelope /> {membre.email || "email@example.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Secteur d'expertise
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Voici les domaines de compétence du membre.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">SECTEUR</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {membre.expertises && membre.expertises.length > 0 ? (
                  membre.expertises.map((expertise, index) => (
                    <li key={index}>{expertise}</li>
                  ))
                ) : (
                  <li>Pas d'expertise renseignée.</li>
                )}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">DOMAINE D'INTERVENTION</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {membre.realisations && membre.realisations.length > 0 ? (
                  membre.realisations.map((expertise, index) => (
                    <li key={index}>{expertise}</li>
                  ))
                ) : (
                  <li>Pas d'expertise renseignée.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-gray-50 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-5 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Contact
            </h2>
            <div className="w-10 h-1 bg-blue-600 rounded mb-4"></div>
            <p className="text-sm text-gray-600 mb-6">
              Utilisez ce formulaire pour envoyer un message directement au
              membre.
            </p>
          </div>
          <div className="p-5 flex flex-col justify-center">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom"
                className="border px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 rounded"
              />
              <textarea
                placeholder="Message"
                className="md:col-span-2 border px-4 py-2 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded font-semibold"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembreDetail;
