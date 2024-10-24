import React, { useState } from 'react';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState('SSC CGL');
  
  // Mock data for demonstration
  const leaderboardData = [
    { rank: 1, name: 'Rahul Sharma', score: 98, testsTaken: 25 },
    { rank: 2, name: 'Priya Patel', score: 97, testsTaken: 23 },
    { rank: 3, name: 'Amit Kumar', score: 95, testsTaken: 24 },
    { rank: 4, name: 'Sneha Gupta', score: 94, testsTaken: 22 },
    { rank: 5, name: 'Vikram Singh', score: 93, testsTaken: 25 },
    // Add more mock data as needed
  ];

  const exams = ['SSC CGL', 'UPSC IAS', 'CAT', 'NEET UG', 'NEET PG'];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">National Leaderboard</h1>
      
      <div className="mb-6">
        <label htmlFor="exam-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Exam
        </label>
        <select
          id="exam-select"
          value={selectedExam}
          onChange={(e) => setSelectedExam(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {exams.map((exam) => (
            <option key={exam} value={exam}>
              {exam}
            </option>
          ))}
        </select>
      </div>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tests Taken
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className={entry.rank <= 3 ? 'bg-indigo-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {entry.rank <= 3 && <Trophy className="h-5 w-5 text-yellow-500 mr-2" />}
                    <div className="text-sm font-medium text-gray-900">{entry.rank}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{entry.score}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {entry.testsTaken}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-center">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            1
          </a>
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </a>
          <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </a>
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Leaderboard;