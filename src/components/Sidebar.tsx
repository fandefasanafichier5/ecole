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
  BarChart3,
  User
} from 'lucide-react';

interface SidebarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection = 'dashboard', onSectionChange }) => {
  const [expandedMenus, setExpandedMenus] = React.useState<string[]>(['students']);

  const toggleMenu = (key: string) => {
    setExpandedMenus(prev => 
      prev.includes(key) 
        ? prev.filter(item => item !== key)
        : [...prev, key]
    );
  };

  const menuItems = [
    { icon: Home, label: 'Tableau de bord', key: 'dashboard', active: activeSection === 'dashboard' },
    { 
      icon: Users, 
      label: 'Étudiants', 
      key: 'students', 
      active: activeSection === 'students' || activeSection === 'all-students' || activeSection === 'student-details' || activeSection === 'admission-form' || activeSection === 'student-promotion',
      submenu: [
        { label: 'Tous les Étudiants', key: 'all-students' },
        { label: 'Détails Étudiant', key: 'student-details' },
        { label: 'Formulaire d\'Admission', key: 'admission-form' },
        { label: 'Promotion Étudiant', key: 'student-promotion' }
      ]
    },
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
      label: 'Compte', 
      key: 'account',
      active: activeSection === 'account',
      submenu: [
        { label: 'Collecte de Frais', key: 'fees-collection' },
        { label: 'Dépenses', key: 'expenses' },
        { label: 'Ajouter Dépenses', key: 'add-expenses' }
      ]
    },
    { icon: Settings, label: 'Paramètres' }
  ];

  const handleItemClick = (item: any) => {
    if (item.key && onSectionChange) {
      if (item.submenu) {
        toggleMenu(item.key);
      }
      onSectionChange(item.key);
    }
  };

  const handleSubItemClick = (subItem: any, parentKey: string) => {
    if (subItem.key && onSectionChange) {
      onSectionChange(subItem.key);
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
              className={`flex items-center justify-between px-3 py-2 mb-1 rounded cursor-pointer hover:bg-slate-700 ${item.active ? 'bg-orange-500' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.count && (
                  <span className="bg-slate-600 text-xs px-2 py-1 rounded-full">{item.count}</span>
                )}
                {item.submenu && (
                  <span className={`text-xs transition-transform ${expandedMenus.includes(item.key) ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                )}
              </div>
            </div>
            {item.submenu && expandedMenus.includes(item.key) && (
              <div className="ml-6 mb-2">
                {item.submenu.map((subItem: any, subIndex: number) => (
                  <div 
                    key={subIndex} 
                    className={`px-3 py-1 text-sm cursor-pointer hover:text-white ${
                      activeSection === subItem.key ? 'text-orange-400' : 'text-slate-300'
                    }`}
                    onClick={() => handleSubItemClick(subItem, item.key)}
                  >
                    ▶ {subItem.label}
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