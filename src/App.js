import './App.css';
import './css/main.css';

import { createContext, useState } from 'react';
import Navbar from './components/main_comp/Navbar';
import Main from './components/main_comp/Main';

export const ThemeContext = createContext(null);

function App() {

  const [isNightMode, setNightMode] = useState(false);

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
