import { equipe } from "../data/equipeData";
import TeamMembreCard from "../components/TeamMemberCard";
import BreadcrumbArea from "../components/BreadcrumbArea";

export default function Equipe() {
  return (
    <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
      <BreadcrumbArea
        title="L'équipe"
        backgroundImage="/images/breadcrumb.png"
      />
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Notre Équipe</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos experts passionnés qui accompagnent les clients avec
          professionnalisme et engagement.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membre) => (
              <TeamMembreCard key={membre.id} membre={membre} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
