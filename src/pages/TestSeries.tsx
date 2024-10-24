import React from 'react';
import { Book, Clock, Users } from 'lucide-react';

const TestSeries: React.FC = () => {
  const testSeries = [
    {
      id: 1,
      name: 'SSC CGL Complete Series',
      totalTests: 30,
      duration: '3 months',
      participants: 5000,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'UPSC IAS Prelims Series',
      totalTests: 25,
      duration: '4 months',
      participants: 8000,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'CAT Full Preparation',
      totalTests: 20,
      duration: '3 months',
      participants: 6000,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'NEET UG Comprehensive',
      totalTests: 35,
      duration: '5 months',
      participants: 10000,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'NEET PG Quick Revision',
      totalTests: 15,
      duration: '2 months',
      participants: 3000,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
    },
  ];

  return (
    <div>
      <div className="relative h-[200px] mb-8">
        <img 
          src="https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&q=80"
          alt="Test papers and pencil"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Test Series</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testSeries.map((series) => (
          <div key={series.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={series.image}
                alt={series.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{series.name}</h2>
              <div className="flex items-center mb-2">
                <Book className="h-5 w-5 text-indigo-600 mr-2" />
                <span>{series.totalTests} Tests</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                <span>{series.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 text-indigo-600 mr-2" />
                <span>{series.participants.toLocaleString()} Participants</span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeries;