import './homepage.css';
import React from 'react';
import { Header } from '../molecules/Header';
import { Footer } from '../molecules/Footer';
import { BuzzwordHero } from '../molecules/BuzzwordHero';

export function BuzzwordHomePage() {
  return (
    <div className="buzzword-home">
      <Header />
      <BuzzwordHero
        initialHeaderText="Welcome To The World's Most Synergistic Buzzword Generation Service"
        bodyText="Startup? 30-under-30-to-be? Use the button below to generate your next big mission statement that will make the world a better place."
      />
      <Footer />
    </div>
  );
}
