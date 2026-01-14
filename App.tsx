
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact'>('home');

  useEffect(() => {
    // If we have a hash in the URL, scroll to it
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleNavigate = (page: 'home' | 'about' | 'contact', sectionId?: string) => {
    setCurrentPage(page);
    if (sectionId) {
      // Small timeout to allow the page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={(p) => handleNavigate(p)} />;
      case 'about': return <About onNavigate={(p) => handleNavigate(p)} />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={(p) => handleNavigate(p)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfc] selection:bg-[#c5a059] selection:text-white relative">
      <Header currentPage={currentPage} onNavigate={(p) => handleNavigate(p)} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={(page, section) => handleNavigate(page, section)} />
    </div>
  );
};

export default App;
