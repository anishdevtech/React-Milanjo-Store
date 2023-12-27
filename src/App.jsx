import React from 'react';
import Hero from './Components/Hero';
import Service from "./Components/Service"
import Testimonials from "./Components/Testimonials"
import Pricing from "./Components/Pricing"
import Footer from "./Components/Footer"


import Cta from "./Components/Cat"
// Your component or function where you want to use the Hero component
const YourComponent = () => {
  return (
    <>
     
      <Hero />
      <Cta />
      <Service />
      <Testimonials />
      <Pricing />
      <Footer />
      
    </>
  );
};

export default YourComponent;
