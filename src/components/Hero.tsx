import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImageUrl?: string; // Optional background image
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Learn More',
  ctaLink = '/about',
  backgroundImageUrl,
}) => {
  return (
    <div
      className={`relative bg-gradient-to-b from-blue-800 to-black text-white py-20 px-4`}
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg mb-6">{subtitle}</p>
        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
              {ctaText}
            </a>
          </Link>
        )}
      </div>
      {/* Optional Overlay */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
    </div>
  );
};

export default Hero;
