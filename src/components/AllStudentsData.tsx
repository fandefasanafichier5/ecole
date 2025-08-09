import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  class: string;
  section: string;
  parents: string;
  address: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  avatar: string;
}

const AllStudentsData = () => {
  const [searchRoll, setSearchRoll] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchClass, setSearchClass] = useState('');

  const students: Student[] = [
    { id: '#0021', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟢' },
    { id: '#0021', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟢' },
    { id: '#0021', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟢' },
    { id: '#0022', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' },
    { id: '#0022', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' },
    { id: '#0022', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' },
    { id: '#0023', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔴' },
    { id: '#0023', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔴' },
    { id: '#0023', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔴' },
    { id: '#0024', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟡' },
    { id: '#0024', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟡' },
    { id: '#0024', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟡' },
    { id: '#0025', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟣' },
    { id: '#0025', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟣' },
    { id: '#0025', name: 'Mark Willy', gender: 'Male', class: '2', section: 'A', parents: 'Jack Sparrow', address: 'TA-107 Newyork', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🟣' },
    { id: '#0026', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' },
    { id: '#0026', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' },
    { id: '#0026', name: 'Jessia Rose', gender: 'Female', class: '1', section: 'A', parents: 'Maria Jamens', address: '59 Australia, Sydney', dateOfBirth: '02/05/2001', phone: '+ 123 9985568', email: 'kazifahim2@gmail.com', avatar: '🔵' }
  ];

  const getAvatarColor = (avatar: string) => {
    switch (avatar) {
      case '🟢': return 'bg-green-500';
      case '🔵': return 'bg-blue-500';
      case '🔴': return 'bg-red-500';
      case '🟡': return 'bg-yellow-500';
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
          <span>Accueil</span>
          <span className="mx-2">/</span>
          <span className="text-orange-500">Tous les Étudiants</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Tous les Étudiants</h1>
      </div>

      {/* Search Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <input
              type="text"
              placeholder="Recherche par Rôle"
              value={searchRoll}
              onChange={(e) => setSearchRoll(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Recherche par Nom"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Recherche par Classe"
              value={searchClass}
              onChange={(e) => setSearchClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <button className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium">
              RECHERCHE
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Données de Tous les Étudiants</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Rôle</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Photo</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Nom</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Genre</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Classe</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Section</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Parents</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Adresse</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date de Naissance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Téléphone</th>
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
                  <td className="px-4 py-3 text-sm text-gray-900">{student.parents}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.address}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{student.dateOfBirth}</td>
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
              Affichage de 1 à 18 sur 18 entrées
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Précédent</span>
              <div className="flex space-x-1">
                <button className="px-3 py-1 bg-orange-500 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">2</button>
              </div>
              <span className="text-sm text-gray-700">Suivant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudentsData;