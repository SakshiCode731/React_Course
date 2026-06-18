import { useState } from "react";

export default function Accordion() {
  const [darkMode, setDarkMode] = useState(false);
  const [openItem, setOpenItem] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <>

      <h1 className="text-2xl font-bold text-blue-500">About Us</h1>
      <div
        className={`max-w-3xl mx-auto mt-6 border rounded-lg overflow-hidden ${darkMode
            ? "bg-black text-white border-gray-700"
            : "bg-white text-black border-gray-300"
          }`}
      >


        {/* Item 1 */}
        <div className="border-b" >

          <button
            onClick={() => toggleAccordion(1)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center ${darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
          >
            Analyze Your Text
            <span>{openItem === 1 ? "−" : "+"}</span>
          </button>

          {openItem === 1 && (
            <div className="p-5">
              <strong >This is the first item’s accordion body.</strong>
              <p className="mt-2">
                It is shown by default until the user collapses it. You can place
                any content here including text, images, forms, or components.
              </p>
            </div>
          )}
        </div>

        {/* Item 2 */}
        <div className="border-b">
          <button
            onClick={() => toggleAccordion(2)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center ${darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
          >
            Accordion Item #2
            <span>{openItem === 2 ? "−" : "+"}</span>
          </button>

          {openItem === 2 && (
            <div className="p-5">
              <strong>This is the second item’s accordion body.</strong>
              <p className="mt-2">
                It is hidden by default and appears when the button is clicked.
              </p>
            </div>
          )}
        </div>

        {/* Item 3 */}
        <div>
          <button
            onClick={() => toggleAccordion(3)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center ${darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
          >
            Accordion Item #3
            <span>{openItem === 3 ? "−" : "+"}</span>
          </button>

          {openItem === 3 && (
            <div className="p-5">
              <strong>This is the third item’s accordion body.</strong>
              <p className="mt-2">
                This section expands when selected and closes the others.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* <button
        onClick={toggleDarkMode}
        className="bg-blue-500 text-white rounded mt-4 px-4 py-2"
      >
        {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
      </button> */}
    </>
  );
}