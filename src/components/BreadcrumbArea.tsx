import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
  backgroundImage?: string;
}

const BreadcrumbArea: React.FC<BreadcrumbProps> = ({
  title,
  backgroundImage = '/images/breadcrumb.png', // à remplacer par ta vraie image
}) => {
  return (
    <div
      className="relative bg-cover bg-center h-[300px] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1220] to-[#2c2e4a] opacity-90" />
      <div className="container mx-auto px-6 z-10 relative mt-8">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <nav className="mt-2 text-white text-sm">
          <Link to="/" className="hover:underline text-white">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <span className="text-primary-400">{title}</span>
        </nav>
      </div>
    </div>
  );
};

export default BreadcrumbArea;
