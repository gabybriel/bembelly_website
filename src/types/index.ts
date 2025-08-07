export interface TeamMembre {
  id: string;
  nom: string;
  email: string;
  poste: string;
  bio: string;
  adresse: string;
  telephone: string;
  photo: string;
  expertises?: string[];
  realisations?: string[];
  citation?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}