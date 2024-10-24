import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">MockMaster</span>
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="hover:text-indigo-200">Login</Link>
            <Link to="/register" className="hover:text-indigo-200">Register</Link>
            <Link to="/dashboard" className="hover:text-indigo-200">Dashboard</Link>
            <Link to="/test-series" className="hover:text-indigo-200">Test Series</Link>
            <Link to="/leaderboard" className="hover:text-indigo-200">Leaderboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;