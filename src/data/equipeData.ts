import { TeamMembre } from '../types';

export const equipe: TeamMembre[] = [
  {
    id: "roland-b",
    nom: "Maitre Roland BEMBELLY",
    email: "exemple@gmail.com",
    poste: "Avocat Principal",
    photo: "/images/ro.png",
    adresse: "Pointe-Noire, Congo",
    telephone: "+242 06 XXX XX XX",
    bio: `
      <strong>Roland Olivier Patrick BEMBELLY</strong> est avocat au Cabinet GOMES et inscrit au Barreau du Congo.<br><br>
      Son activité porte sur le <em>droit du travail</em>, le <em>droit civil</em>, le <em>droit des obligations</em> et le <em>droit commercial OHADA</em> en matière de contentieux.<br><br>
      Il a une expérience dans le conseil aux clients dans les secteurs :
      <ul class="list-disc list-inside mt-2">
        <li>des hydrocarbures et des mines,</li>
        <li>du droit communautaire de la marine marchande,</li>
        <li>et du droit des affaires.</li>
      </ul><br>
      Auteur de plusieurs publications juridiques :
      <ul class="list-decimal list-inside mt-2">
        <li><strong>Essentiel du droit minier</strong> (2015),</li>
        <li><strong>Code des hydrocarbures au Congo</strong> (2019),</li>
        <li><strong>La sous-traitance pétrolière au Congo</strong> (2020).</li>
      </ul><br>
      Il enseigne actuellement le <em>droit administratif</em>, le <em>droit minier</em> et la <em>rédaction d'actes</em> à l'École nationale d'administration de Brazzaville (ENAM).
    `,
    expertises: ["Banques et assurances", "Télécommunications", "Énergie et ressources naturelles","Gouvernements et secteur public"],
    realisations: [
      "Droit des sociétés et fusions et acquisitions",
      "Transport",
      "Droit commercial et distribution",
      "Droit public, marchés publics",
      "Droit social",
      "Imposition"
    ],
    citation: "“Chaque client est une histoire unique à défendre.”"
  },
  {
    id: "victoire-gl",
    nom: "Victoire GLOIRE B.",
    email: "exemple@gmail.com",
    poste: "Avocate Collaboratrice",
    photo: "/images/vic.png",
    adresse: "Pointe-Noire, Congo",
    telephone: "+242 06 XXX XX XX",
    bio: `
      <strong>Victoire GLOIRE</strong> est une avocate collaboratrice et inscrit au Barreau du Congo.<br><br>
      Son activité porte sur le <em>droit du travail</em>, le <em>droit civil</em>, le <em>droit des obligations</em> et le <em>droit commercial OHADA</em> en matière de contentieux.<br><br>
      Il a une expérience dans le conseil aux clients dans les secteurs :
      <ul class="list-disc list-inside mt-2">
        <li>des hydrocarbures et des mines,</li>
        <li>du droit communautaire de la marine marchande,</li>
        <li>et du droit des affaires.</li>
      </ul><br>
      Auteur de plusieurs publications juridiques :
      <ul class="list-decimal list-inside mt-2">
        <li><strong>Essentiel du droit minier</strong> (2015),</li>
        <li><strong>Code des hydrocarbures au Congo</strong> (2019),</li>
        <li><strong>La sous-traitance pétrolière au Congo</strong> (2020).</li>
      </ul><br>
      Il enseigne actuellement le <em>droit administratif</em>, le <em>droit minier</em> et la <em>rédaction d'actes</em> à l'École nationale d'administration de Brazzaville (ENAM).
    `,
    expertises: ["Droit fiscal", "Startups", "Contentieux des affaires"],
    realisations: [
      "A assisté 100+ PME",
      "Chargé de cours à l'université",
      "Participation à 3 réformes juridiques"
    ],
    citation: "“Un bon avocat est un stratège avant tout.”"
  }
];
