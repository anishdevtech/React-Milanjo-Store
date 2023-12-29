// PreLoader.jsx
import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations/Preloading/index.js';
import '../Styles/preloading.css';

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
    
  }, []); // Run the animation when the loading prop changes

  return (
    <div className="preloader">
        <div className="texts-container flex justify-center text-center">
         <span>Milanio</span>
         </div>
    </div>
  );
};

export default PreLoader;
