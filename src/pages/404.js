import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Go Back Home
      </Link>
    </div>
    </Layout>
  );
};

export default NotFound;
