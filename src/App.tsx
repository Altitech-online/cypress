import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import { AppContext } from './context/appContext';

function App() {
  const [someText, setSomeText] = useState('');
  const [inputText, setInputText] = useState('');
  const handleTextChange = useCallback((value: string) => setSomeText(value), [someText]);

  useEffect(() => console.log('rerender'));

  return (
    <AppContext.Provider value={handleTextChange}>
      <div className="App">
        <h1 className="header">Hello</h1>
        <input onChange={(e) => setInputText(e.target.value)} />
        <p>{someText}</p>
        <Button label="test" onClick={() => handleTextChange(inputText)} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
