import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      <div className="relative h-[500px] mb-12">
        <img 
          src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80"
          alt="Students taking exam"
          className="w-full h-full object-cover brightness-50"
        />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6">Welcome to MockMaster</h1>
          <p className="text-2xl mb-8 text-center max-w-2xl">Your gateway to success in competitive exams</p>
          <Link 
            to="/register" 
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 text-xl"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-4">
        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center h-48 text-indigo-600">
            <CheckCircle size={64} />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Smart Learning</h2>
          <p className="text-gray-600 text-center">Personalized study plans and adaptive learning paths</p>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex justify-center items-center h-48 text-indigo-600">
            <TrendingUp size={64} />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Practice Tests</h2>
          <p className="text-gray-600 text-center">Comprehensive mock tests with detailed analysis</p>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex justify-center items-center h-48 text-indigo-600">
            <Users size={64} />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Track Progress</h2>
          <p className="text-gray-600 text-center">Monitor your improvement with detailed analytics</p>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex justify-center items-center h-48 text-indigo-600">
            <TrendingUp size={64} />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Compete & Excel</h2>
          <p className="text-gray-600 text-center">Compare performance with peers nationwide</p>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto mb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-lg">Active Students</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">1,000+</h3>
              <p className="text-lg">Practice Tests</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p className="text-lg">Success Rate</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto text-center mb-16 px-4"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-8">Ready to Excel?</h2>
        <Link 
          to="/register" 
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 text-xl"
        >
          Join MockMaster Today
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;