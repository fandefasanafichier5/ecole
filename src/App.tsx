import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import EarningsChart from './components/EarningsChart';
import ExpensesChart from './components/ExpensesChart';
import StudentsChart from './components/StudentsChart';
import EventCalendar from './components/EventCalendar';
import WebsiteTraffic from './components/WebsiteTraffic';
import NoticeBoard from './components/NoticeBoard';
import SocialStats from './components/SocialStats';
import FeesCollection from './components/FeesCollection';
import StudentDetails from './components/StudentDetails';
import AllStudentsData from './components/AllStudentsData';
import { Users, GraduationCap, BookOpen, DollarSign } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'all-students':
        return (
          <>
            <Header 
              title="Tous les Étudiants" 
              breadcrumb={['Accueil', 'Tous les Étudiants']} 
            />
            <AllStudentsData />
          </>
        );
      case 'student-details':
      case 'students':
        return (
          <>
            <Header 
              title="Détails Étudiant" 
              breadcrumb={['Accueil', 'Détails Étudiant']} 
            />
            <StudentDetails />
          </>
        );
      case 'admission-form':
        return (
          <>
            <Header 
              title="Formulaire d'Admission" 
              breadcrumb={['Accueil', 'Formulaire d\'Admission']} 
            />
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Formulaire d'Admission</h2>
                <p className="text-gray-600">Cette section sera développée prochainement.</p>
              </div>
            </div>
          </>
        );
      case 'student-promotion':
        return (
          <>
            <Header 
              title="Promotion Étudiant" 
              breadcrumb={['Accueil', 'Promotion Étudiant']} 
            />
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Promotion Étudiant</h2>
                <p className="text-gray-600">Cette section sera développée prochainement.</p>
              </div>
            </div>
          </>
        );
      case 'account':
        return (
          <>
            <Header 
              title="Collecte de Frais" 
              breadcrumb={['Accueil', 'Collecte de Frais']} 
            />
            <FeesCollection />
          </>
        );
      default:
        return (
          <>
            <Header />
            <main className="p-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                <StatsCard
                  icon={Users}
                  title="Étudiants"
                  value="150000"
                  bgColor="bg-green-100"
                  iconColor="text-green-600"
                />
                <StatsCard
                  icon={GraduationCap}
                  title="Enseignants"
                  value="2250"
                  bgColor="bg-blue-100"
                  iconColor="text-blue-600"
                />
                <StatsCard
                  icon={BookOpen}
                  title="Parents"
                  value="5400"
                  bgColor="bg-orange-100"
                  iconColor="text-orange-600"
                />
                <StatsCard
                  icon={DollarSign}
                  title="Revenus"
                  value="₹193000"
                  bgColor="bg-red-100"
                  iconColor="text-red-600"
                />
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-5">
                  <EarningsChart />
                </div>
                <div className="col-span-3">
                  <ExpensesChart />
                </div>
                <div className="col-span-4">
                  <StudentsChart />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-4">
                  <EventCalendar />
                </div>
                <div className="col-span-4">
                  <WebsiteTraffic />
                </div>
                <div className="col-span-4">
                  <NoticeBoard />
                </div>
              </div>

              {/* Social Stats */}
              <SocialStats />
            </main>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;