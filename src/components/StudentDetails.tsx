import React from 'react';
import { Edit, Printer, Share } from 'lucide-react';

const StudentDetails = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>Accueil</span>
          <span className="mx-2">/</span>
          <span className="text-orange-500">Détails Étudiant</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Étudiants</h1>
      </div>

      {/* Student Profile Card */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">À Propos de Moi</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Edit className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Printer className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-6">
          {/* Student Photo */}
          <div className="w-40 h-48 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Student Info */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jessia Rose</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Aliquam erat volutpat. Curabitur neris massa sedde lacu stibulum sodales word moun lacey. Aliquam erat volutpatbitur neris massa sedde sociale word moun lacey
              </p>
            </div>

            {/* Student Details Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Nom:</span>
                <span className="text-sm font-medium text-gray-800">Jessia Rose</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Genre:</span>
                <span className="text-sm font-medium text-gray-800">Femme</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Nom du Père:</span>
                <span className="text-sm font-medium text-gray-800">Steve Jones</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Nom de la Mère:</span>
                <span className="text-sm font-medium text-gray-800">Naomi Rose</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Date de Naissance:</span>
                <span className="text-sm font-medium text-gray-800">07.08.2016</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Religion:</span>
                <span className="text-sm font-medium text-gray-800">Islam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Profession du Père:</span>
                <span className="text-sm font-medium text-gray-800">Graphiste</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">E-mail:</span>
                <span className="text-sm font-medium text-gray-800">jessiarose@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Date d'Admission:</span>
                <span className="text-sm font-medium text-gray-800">07.08.2019</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Classe:</span>
                <span className="text-sm font-medium text-gray-800">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Section:</span>
                <span className="text-sm font-medium text-gray-800">Rose</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rôle:</span>
                <span className="text-sm font-medium text-gray-800">1000$</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Adresse:</span>
                <span className="text-sm font-medium text-gray-800">House #10, Road #6, Australia</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Téléphone:</span>
                <span className="text-sm font-medium text-gray-800">+ 88 9856888418</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © Copyrights akkhor 2019. All rights reserved. Designed by PixelBooS
      </div>
    </div>
  );
};

export default StudentDetails;