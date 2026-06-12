

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
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

   const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'gray';
      showAlert("Light mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode}
      toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container mx-auto px-4">
        {
         <Textform  showAlert={showAlert} mode={mode} /> 
        // <About />
        }

      </div>
    </>
  );
}

export default App;



