import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative h-[400px] mb-12">
        <img 
          src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80"
          alt="Students taking exam"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to MockMaster</h1>
          <p className="text-xl mb-8">Your gateway to success in competitive exams</p>
          <Link to="/register" className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
          <h2 className="text-xl font-semibold mb-2">Practice Tests</h2>
          <p>Access a wide range of mock tests for various exams</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 mx-auto mb-4 text-blue-500" />
          <h2 className="text-xl font-semibold mb-2">National Rankings</h2>
          <p>Compare your performance with peers across the country</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-purple-500" />
          <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
          <p>Monitor your improvement over time with detailed analytics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Comprehensive Study Material</h3>
              <p>Access detailed solutions and explanations</p>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80"
            alt="Library study"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Expert Guidance</h3>
              <p>Learn from top educators across India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;