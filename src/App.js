import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
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
        <Link to="/donate">Donate</Link>
      </div>
      <Routes>
        {/* <Route path="/donate" element={<DonationPage/>}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
