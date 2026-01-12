import { useState, useEffect } from 'react';
import { Splash } from './components/Splash';
import { Welcome } from './components/Welcome';
import { Onboarding } from './components/Onboarding';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { EmergencyCall } from './components/EmergencyCall';
import { Hospitals } from './components/Hospitals';
import { Pharmacies } from './components/Pharmacies';
import { Clinics } from './components/Clinics';
import { BloodStock } from './components/BloodStock';
import { HealthInfo } from './components/HealthInfo';
import { FAQ } from './components/FAQ';
import { Search } from './components/Search';
import { Profile } from './components/Profile';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Puskesmas } from './components/Puskesmas';
import { News } from './components/News';
import { Consultation } from './components/Consultation';
import { Laboratory } from './components/Laboratory';
import { EditProfile } from './components/EditProfile';
import { ChangePassword } from './components/ChangePassword';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Announcements } from './components/Announcements';
import { HealthRecords } from './components/HealthRecords';

export type Page = 'home' | 'services' | 'emergency' | 'hospitals' | 'pharmacies' | 'clinics' | 'blood' | 'health' | 'faq' | 'search' | 'profile' | 'doctors' | 'puskesmas' | 'consultation' | 'laboratory' | 'news' | 'edit-profile' | 'change-password' | 'about-us' | 'contact-us' | 'privacy-policy' | 'announcements' | 'health-records';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Auto transition from splash to welcome after 2.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowWelcome(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // 1. Splash screen - auto transitions (2.5s)
  if (showSplash) {
    return <Splash onEnter={() => {
      setShowSplash(false);
      setShowWelcome(true);
    }} />;
  }

  // 2. Welcome screen - user clicks to proceed
  if (showWelcome) {
    return <Welcome onEnter={() => {
      setShowWelcome(false);
      setShowOnboarding(true);
    }} />;
  }

  // 3. Onboarding slides
  if (showOnboarding) {
    return <Onboarding onComplete={() => {
      setShowOnboarding(false);
      setShowAuth(true);
    }} />;
  }

  // 4. Authentication
  if (showAuth && !isAuthenticated) {
    if (authMode === 'login') {
      return (
        <Login
          onLogin={() => {
            setIsAuthenticated(true);
            setShowAuth(false);
          }}
          onSwitchToRegister={() => setAuthMode('register')}
        />
      );
    } else {
      return (
        <Register
          onRegister={() => {
            setIsAuthenticated(true);
            setShowAuth(false);
          }}
          onSwitchToLogin={() => setAuthMode('login')}
        />
      );
    }
  }

  // 5. Main app
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowAuth(true);
    setAuthMode('login');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'emergency':
        return <EmergencyCall />;
      case 'hospitals':
        return <Hospitals />;
      case 'pharmacies':
        return <Pharmacies />;
      case 'clinics':
        return <Clinics />;
      case 'blood':
        return <BloodStock />;
      case 'health':
        return <HealthInfo onBack={() => setCurrentPage('home')} />;
      case 'faq':
        return <FAQ />;
      case 'search':
        return <Search onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} onLogout={handleLogout} />;
      case 'doctors':
        return <Doctors />;
      case 'puskesmas':
        return <Puskesmas />;
      case 'news':
        return <News onBack={() => setCurrentPage('home')} />;
      case 'consultation':
        return <Consultation />;
      case 'laboratory':
        return <Laboratory />;
      case 'edit-profile':
        return <EditProfile onBack={() => setCurrentPage('profile')} />;
      case 'change-password':
        return <ChangePassword onBack={() => setCurrentPage('profile')} />;
      case 'about-us':
        return <AboutUs onBack={() => setCurrentPage('profile')} />;
      case 'contact-us':
        return <ContactUs onBack={() => setCurrentPage('profile')} />;
      case 'privacy-policy':
        return <PrivacyPolicy onBack={() => setCurrentPage('profile')} />;
      case 'announcements':
        return <Announcements onBack={() => setCurrentPage('profile')} />;
      case 'health-records':
        return <HealthRecords onBack={() => setCurrentPage('profile')} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      <main className="pb-28">
        {renderPage()}
      </main>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}