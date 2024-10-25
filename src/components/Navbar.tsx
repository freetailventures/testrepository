import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">MockMaster</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/test-series">Test Series</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;