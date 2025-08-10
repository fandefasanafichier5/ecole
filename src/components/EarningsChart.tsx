import React from 'react';

const EarningsChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Revenus</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Frais Collectés</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Frais Collectés</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-end space-x-4 mb-4">
        <div>
          <span className="text-2xl font-bold text-gray-800">75,000 Ar</span>
        </div>
        <div>
          <span className="text-2xl font-bold text-gray-800">15,000 Ar</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 bg-gray-50 rounded-lg overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Red area */}
          <path d="M0,120 Q100,100 200,80 T400,60 L400,200 L0,200 Z" fill="#ef4444" opacity="0.8"/>
          
          {/* Blue area */}
          <path d="M0,160 Q100,140 200,120 T400,100 L400,200 L0,200 Z" fill="#3b82f6" opacity="0.8"/>
        </svg>
        
        {/* Month labels */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
          <span>Mar</span>
          <span>Avr</span>
          <span>Mai</span>
          <span>Jui</span>
          <span>Jul</span>
          <span>Aoû</span>
          <span>Sep</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;