import React from 'react';
import Link from 'next/link';

const Services = () => {
  // サービスデータ
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Building responsive and modern web applications.',
      icon: '/icons/web-development.svg',
      link: '/services/web-development',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Creating intuitive and cross-platform mobile solutions.',
      icon: '/icons/mobile-app.svg',
      link: '/services/mobile-development',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Designing beautiful and user-friendly interfaces.',
      icon: '/icons/ui-ux-design.svg',
      link: '/services/ui-ux-design',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
