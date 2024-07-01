import React from 'react'
import '../styles/global.css'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">My Blog</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/library" className="hover:underline">Library</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Privacy Policy
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Layout;
