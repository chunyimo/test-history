import React, { useEffect } from 'react';
import './App.css';
import { createBrowserHistory } from './history';
function App() {
  useEffect(() => {
    // @ts-ignore
    window._history = createBrowserHistory();
  }, []);
  return <div className="App"></div>;
}

export default App;
