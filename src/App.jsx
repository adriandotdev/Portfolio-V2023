import './App.css';
// import './css/main.css';
import './css/main.min.css'

import { createContext, useState, useLayoutEffect } from 'react';
import Navbar from './components/main_comp/Navbar';
import Main from './components/main_comp/Main';

export const ThemeContext = createContext(null);

function App() {

  const [isNightMode, setNightMode] = useState(true);

  useLayoutEffect(() => {
    document.title = 'Adrian Nads Marcelo | Portfolio';
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
