import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  createdAt: string;
}

const Blog = () => {
  // Sample blog data (replace with actual API call or database query)
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Exploring the Cosmos: A Beginner’s Guide',
      excerpt: 'An introductory guide to understanding the vast universe around us.',
      createdAt: '2024-11-01',
    },
    {
      id: 2,
      title: 'The Art of UI/UX Design',
      excerpt: 'How to create beautiful and functional user interfaces.',
      createdAt: '2024-10-20',
    },
    {
      id: 3,
      title: 'Building Modern Web Applications',
      excerpt: 'A deep dive into the technologies that power today’s web.',
      createdAt: '2024-10-10',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{post.createdAt}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <a className="text-blue-600 hover:underline">Read More</a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
