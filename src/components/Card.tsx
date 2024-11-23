
import React from 'react';

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
    <div className="border p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
    </div>
);

export default Card;
            