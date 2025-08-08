import React from "react";
import "./App.css";
import Header from './components/Header';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-black">
      <Header />
      <Hero />
      <PricingSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;