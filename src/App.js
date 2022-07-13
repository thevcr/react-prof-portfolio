import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  return (
    <div className='text-center'>
      <Header/>
    <main>
      <PortfolioContainer />
    </main>
    <Footer />
    </div>
  );
}

export default App;
