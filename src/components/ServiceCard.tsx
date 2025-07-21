import React from "react";
import { Service } from "../types";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon from Lucide React
  const IconComponent =
    LucideIcons[service.icon as keyof typeof LucideIcons] ||
    LucideIcons.FileQuestion;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary-50">
        <IconComponent className="w-8 h-8 text-primary-700" />
      </div>
      <h3 className="font-serif text-xl font-bold mb-3 text-secondary-900">
        {service.title}
      </h3>
      <p className="text-secondary-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
