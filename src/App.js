import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import siteApi from './api';

function App() {
  const [counterData, setCounterData] = useState({
    set: false,
    value: -1,
    fact: ''
  });
  console.log("what is counterData", counterData);
  useEffect(function getCounterData() {
    async function fetchCounterData() {
      const results = await siteApi.counter()
      console.log(results)
      const value = results.data.number;
      const fact = results.data.text;
      setCounterData(() => ({ value, fact, set: true }))
    }
    fetchCounterData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {counterData.set &&
        <div>
          <p>Visitor count: {counterData.value}</p>
          <p>Your visitor number fact: {counterData.fact}</p>
        </div>
      }
    </div>
  );
}

export default App;
