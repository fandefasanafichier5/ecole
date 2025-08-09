import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    roll: '',
    bloodGroup: '',
    religion: '',
    email: '',
    class: '',
    section: '',
    admissionId: '',
    phone: '',
    shortBio: '',
    photo: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const handleSave = () => {
    console.log('Saving form data:', formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      roll: '',
      bloodGroup: '',
      religion: '',
      email: '',
      class: '',
      section: '',
      admissionId: '',
      phone: '',
      shortBio: '',
      photo: null
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-orange-500">Formulaire d'Admission</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Add New Students</h1>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-4 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Please Select Gender *</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Of Birth <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="dd/mm/yyyy"
                className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Roll */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Roll
            </label>
            <input
              type="text"
              name="roll"
              value={formData.roll}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blood Group <span className="text-red-500">*</span>
            </label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Please Select Group *</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Religion */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Religion <span className="text-red-500">*</span>
            </label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Please Select Religion *</option>
              <option value="islam">Islam</option>
              <option value="christianity">Christianity</option>
              <option value="hinduism">Hinduism</option>
              <option value="buddhism">Buddhism</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* E-Mail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class <span className="text-red-500">*</span>
            </label>
            <select
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Please Select Class *</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Section <span className="text-red-500">*</span>
            </label>
            <select
              name="section"
              value={formData.section}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            >
              <option value="">Please Select Section *</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>

          {/* Admission ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admission ID
            </label>
            <input
              type="text"
              name="admissionId"
              value={formData.admissionId}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Short BIO */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Short BIO
          </label>
          <textarea
            name="shortBio"
            value={formData.shortBio}
            onChange={handleInputChange}
            rows={6}
            className="w-1/2 px-3 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          />
        </div>

        {/* Upload Photo */}
        <div className="mt-6 flex items-start space-x-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Student Photo (150px X 150px)
            </label>
            <div className="flex items-center space-x-4">
              <label className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 transition-colors">
                Choisir un fichier
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <span className="text-sm text-gray-500">
                {formData.photo ? formData.photo.name : 'Aucun fichier n\'a été sélectionné'}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            className="bg-slate-800 text-white px-8 py-3 rounded-md hover:bg-slate-900 transition-colors font-medium"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;