import React from 'react';

const StudentsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Étudiants</h3>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {/* Blue segment (60%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="8"
              strokeDasharray="150.8 251.2"
              strokeDashoffset="0"
            />
            {/* Orange segment (40%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeDasharray="100.5 251.2"
              strokeDashoffset="-150.8"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Garçons</span>
          </div>
          <span className="text-sm font-semibold">45,000</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-sm text-gray-600">Filles</span>
          </div>
          <span className="text-sm font-semibold">35,000</span>
        </div>
      </div>
    </div>
  );
};

export default StudentsChart;