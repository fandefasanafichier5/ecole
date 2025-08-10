import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  class: string;
  section: string;
  expense: string;
  amount: number;
  status: 'Paid' | 'Unpaid';
  phone: string;
  email: string;
  avatar: string;
}

const FeesCollection = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  const students: Student[] = [
    { id: '#0021', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟢' },
    { id: '#0022', name: 'Jessia', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔵' },
    { id: '#0023', name: 'Mike John', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔴' },
    { id: '#0024', name: 'Maria Jamen', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 54000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟣' },
    { id: '#0025', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟢' },
    { id: '#0026', name: 'Jessia', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔵' },
    { id: '#0027', name: 'Mike John', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔴' },
    { id: '#0028', name: 'Maria Jamen', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 54000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟣' },
    { id: '#0029', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟢' },
    { id: '#0030', name: 'Jessia', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔵' },
    { id: '#0031', name: 'Mike John', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔴' },
    { id: '#0032', name: 'Maria Jamen', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 54000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟣' },
    { id: '#0033', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟢' },
    { id: '#0034', name: 'Jessia', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔵' },
    { id: '#0035', name: 'Mike John', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔴' },
    { id: '#0036', name: 'Maria Jamen', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 54000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟣' },
    { id: '#0037', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟢' },
    { id: '#0038', name: 'Jessia', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔵' },
    { id: '#0039', name: 'Mike John', gender: 'Male', class: '2', section: 'A', expense: 'Class Test', amount: 52000.00, status: 'Paid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🔴' },
    { id: '#0040', name: 'Maria Jamen', gender: 'Female', class: '2', section: 'A', expense: 'Class Test', amount: 54000.00, status: 'Unpaid', phone: '+123 9985568', email: 'kazifahim@gmail.com', avatar: '🟣' }
  ];

  const getAvatarColor = (avatar: string) => {
    switch (avatar) {
      case '🟢': return 'bg-green-500';
      case '🔵': return 'bg-blue-500';
      case '🔴': return 'bg-red-500';
      case '🟣': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-orange-500">Fees Collection</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">All Fees Collection</h1>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by Phone"
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium">
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Photo</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Gender</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Class</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Section</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Expense</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">E-mail</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.id}</td>
                  <td className="px-4 py-3">
                    <div className={`w-8 h-8 rounded-full ${getAvatarColor(student.avatar)} flex items-center justify-center text-white text-xs font-medium`}>
                      {getInitials(student.name)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.gender}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.class}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.section}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.expense}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.amount.toLocaleString()}.00 Ar</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.email}</td>
                  <td className="px-4 py-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Accédez aux paramètres
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Précédent</span>
              <div className="flex space-x-1">
                <button className="px-3 py-1 bg-orange-500 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">2</button>
              </div>
              <span className="text-sm text-gray-700">Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesCollection;