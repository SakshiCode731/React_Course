

import './App.css'
import Navbar from "./assets/Navbar";
import Textform from './assets/Textform';
import About from './assets/About';
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light'); //weather dark mode is enable or not
   const toggleMode = () => {
    setmode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode}
      toggleMode={toggleMode}/>

      <div className="container mx-auto px-4">
        {
         <Textform heading="Enter Your Text" /> 
        // <About />
        }

      </div>
    </>
  );
}

export default App;



