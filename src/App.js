import React, { useState } from 'react';
import './App.css';

function App() {
  const url = 'https://www.falstad.com/circuit/circuitjs.html';
  const [showLogo, setShowLogo] = useState(false);

  const handleFrameLoad = () => {
    setShowLogo(true);
  };

  return (
    <div id="root">
      <iframe
        className="iframe"
        src={url}
        title="CircuitSim"
        onLoad={handleFrameLoad}
      />
      {showLogo && <div className="logo" />}
    </div>
  );
}

export default App;
