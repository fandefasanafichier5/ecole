import React from 'react';

const WebsiteTraffic = () => {
  const trafficData = [
    { source: 'Direct', visitors: 13260, percentage: 45, color: 'bg-cyan-400' },
    { source: 'Recherche', visitors: 2249, percentage: 27, color: 'bg-blue-500' },
    { source: 'Référents', visitors: 4236, percentage: 8, color: 'bg-orange-400' },
    { source: 'Social', visitors: 300, percentage: 7, color: 'bg-red-500' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Trafic du Site Web</h3>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-gray-800">2,590</div>
      </div>

      {/* Progress bars */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="flex h-full rounded-full overflow-hidden">
          <div className="bg-cyan-400 h-full" style={{ width: '45%' }}></div>
          <div className="bg-blue-500 h-full" style={{ width: '27%' }}></div>
          <div className="bg-orange-400 h-full" style={{ width: '8%' }}></div>
          <div className="bg-red-500 h-full" style={{ width: '7%' }}></div>
        </div>
      </div>

      {/* Traffic sources */}
      <div className="space-y-3">
        {trafficData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
              <span className="text-sm text-gray-600">{item.source}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-semibold text-gray-800">{item.visitors.toLocaleString()}</span>
              <span className="text-sm text-gray-500">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteTraffic;