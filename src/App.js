import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/pages/About';
import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  return (
    <body className='text-center'>
    <main>
      <PortfolioContainer />
    </main>
    <Footer />
    </body>
  );
}



export default App;
