import React, { useState, useEffect } from 'react';
import LoadingScreenSketch from './LoadingScreenSketch';
//import App from './App'; // Your main app component

const LoadingScreen = (page) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change this to your actual loading condition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <LoadingScreenSketch /> : page}
    </div>
  );
};

export default LoadingScreen;