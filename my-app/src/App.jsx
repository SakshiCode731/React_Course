

import './App.css'
import Navbar from "./assets/Navbar";
import Textform from './assets/Textform';
import About from './assets/About';
import Alert from './assets/Alert';
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light'); //weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
}

   const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'gray';
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode}
      toggleMode={toggleMode}/>
      <Alert alert="This is an alert message!" />

      <div className="container mx-auto px-4">
        {
         <Textform heading="Enter Your Text" mode={mode} /> 
        // <About />
        }

      </div>
    </>
  );
}

export default App;



