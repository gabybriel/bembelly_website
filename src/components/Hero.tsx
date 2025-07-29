import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  desc: string;
  backgroundImage: string;
  height?: "full" | "large" | "medium" | "small";
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  desc,
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-5 max-w-6xl">
        <h1 className="font-serif text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-xl md:text-xl text-secondary-100 max-w-auto mx-auto">
            {subtitle}
          </p>
        )}
        {desc && (
        <p className="text-sm sm:text-xl md:text-xl text-secondary-100 max-w-auto mx-auto">
          {desc}
        </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
