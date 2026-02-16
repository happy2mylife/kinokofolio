import React, { useState, useEffect } from 'react';
import Navigation from './components/organisms/Navigation';
import HeroSection from './components/organisms/HeroSection';
import WorksSection from './components/organisms/WorksSection';
import MediaSection from './components/organisms/MediaSection';
import ProfileSection from './components/organisms/ProfileSection';
import ContactSection from './components/organisms/ContactSection';
import { projects, mediaData, careerData, qualifications, activities, socialLinks, selectedWorks, kinokoContents } from './constants/data';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-orange-200">
      <Navigation
        activeSection={activeSection}
        scrollY={scrollY}
        onSectionChange={setActiveSection}
      />

      <HeroSection />
      <ProfileSection careerData={careerData} qualifications={qualifications} activities={activities} socialLinks={socialLinks} />
      <WorksSection selectedWorks={selectedWorks} kinokoContents={kinokoContents} />
      <MediaSection mediaData={mediaData} />
      <ContactSection />
    </div>
  );
};

export default Portfolio;