"use client"
import React, { useEffect } from 'react';

const App = () => {  
  useEffect(() => {
    window.location.replace("https://zappsite.com/novapetropoliscomvc");
  }, []);

  return (
    <div>
      <p>Redirecionando...</p>
    </div>
  );
};

export default App;
