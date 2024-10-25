import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="px-3 py-2 text-white hover:text-indigo-200 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default NavLink;