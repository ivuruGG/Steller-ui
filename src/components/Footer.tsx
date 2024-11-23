import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Stellar-UI</h2>
          <p className="text-gray-400">Designing the Future, One Star at a Time.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56c-.89.39-1.84.65-2.85.77a4.93 4.93 0 002.17-2.72 9.72 9.72 0 01-3.1 1.18 4.92 4.92 0 00-8.39 4.48 13.93 13.93 0 01-10.1-5.1 4.92 4.92 0 001.52 6.56 4.89 4.89 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 4.92 4.92 0 01-2.22.08 4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.11 2.1c-.39 0-.78-.02-1.17-.07a13.93 13.93 0 007.54 2.21c9.05 0 14-7.5 14-14 0-.21-.01-.42-.02-.63A9.94 9.94 0 0024 4.56z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C8.74 0 8.333.014 7.052.072c-1.27.058-2.155.27-2.92.577a5.78 5.78 0 00-2.045 1.296 5.78 5.78 0 00-1.296 2.045c-.308.765-.519 1.65-.577 2.92C.014 8.333 0 8.74 0 12s.014 3.667.072 4.948c.058 1.27.27 2.155.577 2.92a5.78 5.78 0 001.296 2.045 5.78 5.78 0 002.045 1.296c.765.308 1.65.519 2.92.577C8.333 23.986 8.74 24 12 24s3.667-.014 4.948-.072c1.27-.058 2.155-.27 2.92-.577a5.78 5.78 0 002.045-1.296 5.78 5.78 0 001.296-2.045c.308-.765.519-1.65.577-2.92C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.948c-.058-1.27-.27-2.155-.577-2.92a5.78 5.78 0 00-1.296-2.045 5.78 5.78 0 00-2.045-1.296c-.765-.308-1.65-.519-2.92-.577C15.667.014 15.26 0 12 0zm0 2.166c3.184 0 3.573.012 4.832.07 1.165.055 1.798.24 2.214.398.54.21.926.463 1.337.874.411.411.664.797.874 1.337.158.416.343 1.049.398 2.214.058 1.26.07 1.648.07 4.832s-.012 3.573-.07 4.832c-.055 1.165-.24 1.798-.398 2.214a4.445 4.445 0 01-.874 1.337 4.445 4.445 0 01-1.337.874c-.416.158-1.049.343-2.214.398-1.26.058-1.648.07-4.832.07s-3.573-.012-4.832-.07c-1.165-.055-1.798-.24-2.214-.398a4.445 4.445 0 01-1.337-.874 4.445 4.445 0 01-.874-1.337c-.158-.416-.343-1.049-.398-2.214-.058-1.26-.07-1.648-.07-4.832s.012-3.573.07-4.832c.055-1.165.24-1.798.398-2.214.21-.54.463-.926.874-1.337a4.445 4.445 0 011.337-.874c.416-.158 1.049-.343 2.214-.398C8.427 2.178 8.816 2.166 12 2.166zm0 4.334a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 9.166a3.667 3.667 0 110-7.333 3.667 3.667 0 010 7.333zm6.296-9.631a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
