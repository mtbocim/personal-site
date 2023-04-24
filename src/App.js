import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import siteApi from './api';
import userContext from './userContext';
import Nav from './navigation/Nav';
import VisitorCounter from './VistorCounter';

function App() {
  const [counterData, setCounterData] = useState({
    fetched: false,
    value: -1,
    fact: ''
  });
  console.log("what is counterData", counterData);
  useEffect(function getCounterData() {
    async function fetchCounterData() {
      const results = await siteApi.counter();
      const value = results.data.number;
      const fact = results.data.text;
      setCounterData(() => ({ value, fact, fetched: true }))
    }
    fetchCounterData();
  }, []);

  return (
    <userContext.Provider value={''}>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={''} />
            <Route path='/about' element={''} />
            <Route path='/contact' element={''} />
            <Route path='/projects' element={''} />
            {/* <Route path='/blog' element={''} /> */}

          </Routes>
        </BrowserRouter>
        {counterData.fetched === false 
          ? 
            <p>Getting your fact...</p> 
          :
            <VisitorCounter fact={counterData.fact} count={counterData.value}/>
        }
      </div>
    </userContext.Provider>

  );
}

export default App;
