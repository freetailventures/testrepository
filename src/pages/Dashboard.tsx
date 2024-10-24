import React from 'react';
import { BarChart, CheckCircle, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const recentTests = [
    { id: 1, name: 'SSC CGL Mock Test 1', score: 75, totalQuestions: 100 },
    { id: 2, name: 'UPSC IAS Prelims Mock 2', score: 68, totalQuestions: 100 },
    { id: 3, name: 'CAT Quantitative Aptitude', score: 82, totalQuestions: 100 },
  ];

  const upcomingTests = [
    { id: 1, name: 'NEET UG Full Mock Test', date: '2023-05-15' },
    { id: 2, name: 'SSC CGL Tier II Mock', date: '2023-05-20' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart className="h-8 w-8 text-indigo-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Average Score</h2>
          <p className="text-3xl font-bold">75%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Tests Completed</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Overall Rank</h2>
          <p className="text-3xl font-bold">#256</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Tests</h2>
          <ul>
            {recentTests.map((test) => (
              <li key={test.id} className="mb-4">
                <p className="font-semibold">{test.name}</p>
                <p>Score: {test.score}/{test.totalQuestions}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${(test.score / test.totalQuestions) * 100}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Tests</h2>
          <ul>
            {upcomingTests.map((test) => (
              <li key={test.id} className="mb-4">
                <p className="font-semibold">{test.name}</p>
                <p>Date: {test.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;