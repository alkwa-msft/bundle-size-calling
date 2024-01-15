import React, { useEffect, useState } from 'react';
import hero from './hero.svg';
import './App.css';
import { CallAdapter, CallComposite, createAzureCommunicationCallAdapterFromClient, createStatefulCallClient } from '@azure/communication-react';
import { CallClient } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

function App() {
  const [adapter, setAdapter] = useState<CallAdapter | undefined>(undefined);

  const token = "";
  const userId = "";
  const groupId = "f01dab1e-0ff1-c1a1-c0de-dec1a551f1ed";

  // set up all of the token stuff in here and set things back to state
  useEffect(()=>{
    (async ()=>{
      const tokenCredential = new AzureCommunicationTokenCredential(token);
      const callClient = createStatefulCallClient({userId: {communicationUserId: userId}});
      const callAgent = await callClient.createCallAgent(tokenCredential);
      const adapter = await createAzureCommunicationCallAdapterFromClient(callClient, callAgent, { groupId });
      setAdapter(adapter);
      // set up call client and call agent
      // set up adapter
    })();
  }, [])
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
        {adapter && <div style={{width: 1024, height: 768}}><CallComposite adapter={adapter}></CallComposite></div>}
      </header>
    </div>
  );
}

export default App;
