import React from 'react';

const ExpensesChart = () => {
  const expenses = [
    { label: 'Jan 2019', value: 15000, color: 'bg-cyan-400', height: 'h-32' },
    { label: 'Fév 2019', value: 16000, color: 'bg-blue-500', height: 'h-24' },
    { label: 'Mar 2019', value: 8000, color: 'bg-orange-400', height: 'h-16' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Dépenses</h3>
        <div className="text-sm text-gray-500">Mar 2019</div>
      </div>

      <div className="flex items-end justify-between space-x-4 h-40 mb-4">
        {expenses.map((expense, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className={`${expense.color} ${expense.height} w-full rounded-t mb-2`}></div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-800">₹{expense.value.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{expense.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="text-xs text-gray-500 mb-2">Total</div>
        <div className="text-lg font-bold text-gray-800">₹39,000</div>
      </div>
    </div>
  );
};

export default ExpensesChart;