import './App.css';
import './css/main.css';

import { createContext, useState, useLayoutEffect } from 'react';
import Navbar from './components/main_comp/Navbar';
import Main from './components/main_comp/Main';

export const ThemeContext = createContext(null);

function App() {

  const [isNightMode, setNightMode] = useState(false);

  useLayoutEffect(() => {
    document.title = 'Adrian.dev';
    console.log("Rendered");
  }, [])
  return (
    <div>
      <ThemeContext.Provider value={{ isNightMode, setNightMode }}>
        <Navbar />
        <Main />      
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
