

import './App.css'
import Navbar from "./assets/Navbar";
import Textform from './assets/Textform';
// import About from './assets/About';
import Alert from './assets/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route }
 from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 1500);
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'gray';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode}
        toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container mx-auto px-4">
      {/* <Routes>
        {/* /users---> Component 1
        /users/home---> --> Component 2
        /users/home/1---> Component 3 */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/" element={<Textform showAlert={showAlert} mode={mode} />} />
      </Routes> */ }
        
         
        <Textform showAlert={showAlert} mode={mode}/>
        {/* <About /> */}
        

      </div>
    </>
  );
}

export default App;



