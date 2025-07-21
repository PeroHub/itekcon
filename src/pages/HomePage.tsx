import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import LocationMap from '../components/LocationMap';
import Stats from '../components/Stats';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Stats />
      <ServicesOverview />
      <LocationMap />
    </div>
  );
};

export default HomePage;