import React, { useState, useEffect } from 'react';

interface SNSPost {
  id: number;
  platform: string; // e.g., 'Twitter', 'Instagram', 'YouTube'
  content: string;
  url: string;
  date: string;
}

const platformIcons: { [key: string]: string } = {
  Twitter: '/icons/twitter.svg',
  Instagram: '/icons/instagram.svg',
  YouTube: '/icons/youtube.svg',
};

const POSTS_PER_PAGE = 3;

const SNSFeed = () => {
  const [posts, setPosts] = useState<SNSPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Mock API call to fetch SNS posts (replace with real API endpoint)
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await new Promise<SNSPost[]>((resolve) =>
        setTimeout(() => {
          resolve([
            {
              id: 1,
              platform: 'Twitter',
              content: 'Check out our latest blog post! 🚀',
              url: 'https://twitter.com/example/status/123456789',
              date: '2024-11-01',
            },
            {
              id: 2,
              platform: 'Instagram',
              content: 'Here’s a sneak peek of our latest design. 🌌',
              url: 'https://instagram.com/p/example',
              date: '2024-10-30',
            },
            {
              id: 3,
              platform: 'YouTube',
              content: 'Watch our new video on building modern apps! 🎥',
              url: 'https://youtube.com/watch?v=example',
              date: '2024-10-25',
            },
            {
              id: 4,
              platform: 'Twitter',
              content: 'Our team is expanding! Join us. 💼',
              url: 'https://twitter.com/example/status/987654321',
              date: '2024-10-20',
            },
            {
              id: 5,
              platform: 'Instagram',
              content: 'New product launch! Don’t miss out. 🛠️',
              url: 'https://instagram.com/p/example2',
              date: '2024-10-18',
            },
          ]);
        }, 1000)
      );
      setPosts(response);
    } catch (err) {
      setError('Failed to fetch SNS posts. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  if (isLoading) {
    return <p className="text-center text-gray-500">Loading SNS posts...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              {platformIcons[post.platform] && (
                <img
                  src={platformIcons[post.platform]}
                  alt={post.platform}
                  className="w-6 h-6"
                />
              )}
              <h3 className="text-lg font-bold">{post.platform}</h3>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on {post.platform}
            </a>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 rounded-md ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 rounded-md ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SNSFeed;
