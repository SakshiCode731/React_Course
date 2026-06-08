import './App.css'
import Navbar from "./assets/Navbar";
import Textform from './assets/Textform';
import About from './assets/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

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



