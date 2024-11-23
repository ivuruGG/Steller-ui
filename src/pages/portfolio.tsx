import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Portfolio = () => {
  // Sample portfolio data (replace with actual API call or database query)
  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: 'Cosmic Design',
      description: 'A futuristic UI design inspired by the cosmos.',
      imageUrl: '/images/project1.jpg',
      projectUrl: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Stellar App',
      description: 'A cross-platform mobile app for stargazers.',
      imageUrl: '/images/project2.jpg',
      projectUrl: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Galactic Website',
      description: 'A responsive website for space exploration enthusiasts.',
      imageUrl: '/images/project3.jpg',
      projectUrl: 'https://example.com/project3',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Portfolio</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/portfolio/${project.id}`}>
                    <a className="text-blue-600 hover:underline">View Details</a>
                  </Link>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
