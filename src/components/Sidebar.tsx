import React from 'react';
import { 
  Home, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Library,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  UserCheck,
  Bus,
  Calculator,
  Bell,
  Award,
  BarChart3
} from 'lucide-react';

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection = 'dashboard', onSectionChange }) => {
  const menuItems = [
    { icon: Home, label: 'Tableau de bord', key: 'dashboard', active: activeSection === 'dashboard' },
    { icon: Users, label: 'Étudiants', count: 7 },
    { icon: GraduationCap, label: 'Enseignants', count: 7 },
    { icon: BookOpen, label: 'Parents', count: 7 },
    { icon: Library, label: 'Bibliothèque' },
    { icon: UserCheck, label: 'Présences' },
    { icon: FileText, label: 'Devoirs' },
    { icon: Calendar, label: 'Emploi du temps' },
    { icon: CreditCard, label: 'Frais' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Bell, label: 'Avis' },
    { icon: Bus, label: 'Transport' },
    { icon: Calculator, label: 'Budget' },
    { icon: Award, label: 'Résultats' },
    { icon: BarChart3, label: 'Rapports' },
    { 
      icon: User, 
      label: 'Account', 
      key: 'account',
      active: activeSection === 'account',
      submenu: [
        { label: 'All Fees Collection', key: 'fees-collection' },
        { label: 'Expenses', key: 'expenses' },
        { label: 'Add Expenses', key: 'add-expenses' }
      ]
    },
    { icon: Settings, label: 'Paramètres' }
  ];

  const handleItemClick = (item: any) => {
    if (item.key && onSectionChange) {
      onSectionChange(item.key);
    }
  };

  return (
    <div className="w-64 bg-slate-800 min-h-screen text-white">
      {/* Logo */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-orange-500">AKKHOR</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Rechercher..."
            className="w-full bg-slate-700 text-white px-3 py-2 rounded text-sm placeholder-slate-400"
          />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="px-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div 
              className={`flex items-center justify-between px-3 py-2 mb-1 rounded cursor-pointer hover:bg-slate-700 ${item.active ? 'bg-slate-700' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.count && (
                <span className="bg-slate-600 text-xs px-2 py-1 rounded-full">{item.count}</span>
              )}
            </div>
            {item.submenu && item.active && (
              <div className="ml-6 mb-2">
                {item.submenu.map((subItem: any, subIndex: number) => (
                  <div key={subIndex} className="px-3 py-1 text-sm text-slate-300 hover:text-white cursor-pointer">
                    • {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;