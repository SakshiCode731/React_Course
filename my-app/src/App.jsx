import './App.css'
import Navbar from "./assets/Navbar";



function App() {
  return (
    <>
      <Navbar title = "TextUtils " aboutText= "About TextUtils" />

      {/* <nav className="bg-gray-800 p-4 text-white">
        <div className="flex gap-4">
          <a href="#">Dashboard</a>
          <a href="#">Team</a>
          <a href="#">Projects</a>
          <a href="#">Calendar</a>
        </div>

        <div className="mt-4">
          <button className="rounded bg-blue-500 px-4 py-2">
            Notification
          </button>
        </div>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="mt-4 size-6"
        >
          <path
            d="M3.75 6.75h16.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </nav> */}
    </>
  )
}

export default App



// function App() {
//   return (
//     <>
//       <Navbar />
//     </>
//   )
// }

// export default App