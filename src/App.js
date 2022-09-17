import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Heading from './components/Heading';
import StockContext from './context/StockContext';
import ThemeContext from './context/ThemeContext';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState('META');


  return (
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Heading />
          <Dashboard />
          <Footer />
        </StockContext.Provider>
      </ThemeContext.Provider>
  );
}

export default App;
