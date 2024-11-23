import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional for cards without images
  linkUrl?: string; // Optional for actionable cards
  buttonText?: string; // Optional for cards with buttons
  onButtonClick?: () => void; // Optional callback for button click
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Optional Image Section */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Optional Action Section */}
        <div className="flex justify-between items-center">
          {linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn More
            </a>
          )}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
