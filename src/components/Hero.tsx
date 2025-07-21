import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: "full" | "large" | "medium" | "small";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  height = "large",
}) => {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
    small: "min-h-[40vh]",
  };

  return (
    <div
      className={`relative flex items-center justify-center ${heightClasses[height]}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary-950 bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
