import React from 'react';
import { Search, Bell, MessageSquare, User } from 'lucide-react';

interface HeaderProps {
  title?: string;
  breadcrumb?: string[];
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'Tableau de bord Admin', 
  breadcrumb = ['Accueil', 'Tableau de bord'] 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <span className={index === breadcrumb.length - 1 ? 'text-orange-500' : ''}>{item}</span>
                {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Samedi, 09 Août</span>
          
          {/* Notifications */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="relative">
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">5</span>
            </div>
          </div>

          {/* User */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;