import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import siteApi from './api';
import userContext from './userContext';
import Nav from './navigation/Nav';
import VisitorCounter from './VistorCounter';
import ProjectDisplay from './projects/ProjectDisplay';
import ContactDisplay from './contact/ContactDisplay';
import HomeDisplay from './home/HomeDisplay';
import AboutDisplay from './about/AboutDisplay';
import TechnicalDisplay from './technical/TechnicalDisplay';
import BlogDisplay from './blog/BlogDisplay';
import Admin from './Admin';

function App() {
  const [counterData, setCounterData] = useState({
    fetched: false,
    value: -1,
    fact: ''
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log("what is token", token)
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

  async function handleLogin(formData) {
    const result = await siteApi.login(formData);
    localStorage.setItem("token", result.token);
    setToken(() => result.token);
  }

  return (
    <userContext.Provider value={''}>
      <div className="App">
        <div className='App-Router'>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path='/' element={<HomeDisplay />} />
              <Route path='/about' element={<AboutDisplay />} />
              <Route path='/blog' element={<BlogDisplay />} />
              <Route path='/projects' element={<ProjectDisplay />} />
              <Route path='/technical' element={<TechnicalDisplay />} />
              <Route path='/contact' element={<ContactDisplay />} />
              <Route path='/admin' element={<Admin handleLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </div>
        <footer>{counterData.fetched === false
          ?
          <p>Getting your fact...</p>
          :
          <VisitorCounter fact={counterData.fact} count={counterData.value} />
        }</footer>
      </div>
    </userContext.Provider>

  );
}

export default App;
