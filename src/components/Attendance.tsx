import React, { useState } from 'react';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedSession, setSelectedSession] = useState('');

  // Generate days 1-31 for the calendar
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Sample student data
  const students = [
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon'
  ];

  // Sample attendance data (✓ for present, ✗ for absent, - for no data)
  const getAttendanceStatus = (studentIndex: number, day: number) => {
    // Create a pattern for demonstration
    const patterns = [
      [1, 1, 1, 0, 1, 1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, -1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 1, 1, 0, 1, 1, 1, -1, 1, 1, 1, 1]
    ];
    
    const pattern = patterns[studentIndex % patterns.length];
    return pattern[day - 1];
  };

  const renderAttendanceIcon = (status: number) => {
    if (status === 1) {
      return <span className="text-green-500 font-bold">✓</span>;
    } else if (status === 0) {
      return <span className="text-red-500 font-bold">✗</span>;
    } else {
      return <span className="text-gray-400">-</span>;
    }
  };

  const handleSave = () => {
    console.log('Saving attendance data...');
  };

  const handleReset = () => {
    setSelectedClass('');
    setSelectedSection('');
    setSelectedMonth('');
    setSelectedSession('');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-orange-500">Attendance</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Student Attendance</h1>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Student Attendance</h3>
        
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Select Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Section</label>
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Select Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Session</label>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="w-full px-3 py-2 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Select Session</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-800 text-white px-8 py-2 rounded-md hover:bg-slate-900 transition-colors font-medium"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Attendance Sheet */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Attendance Sheet Of Class One: Section A, April 2019</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 sticky left-0 bg-gray-50 min-w-[150px]">
                  Students
                </th>
                {days.map((day) => (
                  <th key={day} className="px-2 py-3 text-center text-sm font-medium text-gray-700 min-w-[40px]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student, studentIndex) => (
                <tr key={studentIndex} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900 sticky left-0 bg-white border-r border-gray-200 min-w-[150px]">
                    {student}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="px-2 py-3 text-center text-sm min-w-[40px]">
                      {renderAttendanceIcon(getAttendanceStatus(studentIndex, day))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;