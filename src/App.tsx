import React, { useEffect, useState } from 'react';
import hero from './hero.svg';
import './App.css';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import { ChatComposite } from '@azure/communication-react';
function App() {
  const [adapter, setAdapter] = useState<undefined>(undefined);
  return (
    <div className="App">
      <header className="App-header">
        {!adapter && <img src={hero} className="App-hero" alt="hero" />}
        {!adapter && <p>
          Get started with Azure Communication Services UI Library.
        </p> }
        {!adapter && <a
          className="App-link"
          href=".ms/acsstorybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook
        </a>}
        {adapter && <div style={{width: 1024, height: 768}}><ChatComposite adapter={adapter}></ChatComposite></div>}
      </header>
    </div>
  );
}

export default App;
