import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

import Campaigns from './Components/Campaigns';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className=''>
        <NavBar />
        <HeroSection/>
        <Campaigns/>
      </div>
    </Router>
    
  );
}

export default App;
