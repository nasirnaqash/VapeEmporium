import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
// import Banner from './components/Banner/Banner';
import SmokeChoice from './pages/SmokeChoice';
import VapeSub from './pages/VapeSub';
import NoVapeSub from './pages/NoVapeSub';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Vapes from './pages/Vapes';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
        <Route path="/vapes" element={<Vapes/>} />
          <Route path="/" element={<Header/>} />
          <Route path="/smoke-choice" element={<SmokeChoice/>}/>
          <Route path="/vape" element={<VapeSub/>} />
          <Route path="/no-vape" element={<NoVapeSub/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;