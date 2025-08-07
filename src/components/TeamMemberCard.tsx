import React from "react";
import { TeamMembre } from "../types";
import { Link } from "react-router-dom";

interface Props {
  membre: TeamMembre;
}

const TeamMembreCard: React.FC<Props> = ({ membre }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="mb-8 w-80 h-auto">
        <img
          src={membre.photo}
          alt={membre.nom}
          className="rounded-full w-full h-full object-cover border border-gray-200"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{membre.nom}</h3>
      <p className="text-gray-500 text-sm">{membre.poste}</p>

      <Link
        to={`/equipe/${membre.id}`}
        className="text-sm text-primary-600 hover:underline block mt-3"
      >
        Voir le profil →
      </Link>
    </div>
  );
};

export default TeamMembreCard;
