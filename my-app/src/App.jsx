import './App.css'
import Navbar from "./assets/Navbar";
import Textform from './assets/Textform';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container mx-auto px-4">
        <Textform heading="Enter Your Text" />
      </div>
    </>
  );
}

export default App;



