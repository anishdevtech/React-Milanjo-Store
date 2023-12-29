import React, { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Cta from './Components/Cat';
import Loading from './Components/Loading';

const YourComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, like fetching data
    const fetchData = async () => {
      try {
        // Simulate an API call with a delay
        
        // Once the data is fetched or operation is complete, set loading to false
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed and set loading to false
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      
        <Loading  />
          <Hero />
          
          <Service />
          <Testimonials />
          <Pricing />
          <Footer />
      </>
      )
};

export default YourComponent;
