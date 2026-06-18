import { useState } from "react";

export default function Accordion(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [openItem, setOpenItem] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  };


  return (
    <>

      <h1 className="text-2xl font-bold text-blue-500" >About Us</h1>
      <div style={myStyle}
        className={`max-w-3xl mx-auto mt-6 border rounded-lg overflow-hidden ${darkMode
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black border-gray-300"
          }`}
      >


        {/* Item 1 */}
        <div className="border-b" >

          <button
            onClick={() => toggleAccordion(1)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center
  ${props.mode === "dark"
                ? "bg-[#042743] text-white hover:bg-[#06385c]"
                : "bg-gray-100 text-black"
              }`}
          >
            <strong>Analyze Your Text</strong>
            <span>{openItem === 1 ? "−" : "+"}</span>
          </button>

          {openItem === 1 && (
            <div
              className={`p-5 ${props.mode === "dark"
                  ? "bg-[#24506f] text-white"
                  : "bg-white text-black"
                }`}
            >
              <p className="mt-2">
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
              </p>
            </div>
          )}
        </div>

        {/* Item 2 */}
        <div className="border-b">
          <button
            onClick={() => toggleAccordion(2)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center
  ${props.mode === "dark"
                ? "bg-[#042743] text-white hover:bg-[#06385c]"
                : "bg-gray-100 text-black"
              }`}
          >
            <strong>free to use</strong>
            <span>{openItem === 2 ? "−" : "+"}</span>
          </button>

          {openItem === 2 && (
            <div
              className={`p-5 ${props.mode === "dark"
                  ? "bg-[#24506f] text-white"
                  : "bg-white text-black"
                }`}
            >
              <p className="mt-2">
                TextUtils is a free character counter tool that provides instant character count & word count
                statistics for a given text. TextUtils reports the number of words and characters.
                Thus it is suitable for writing text with word/ character limit.
              </p>
            </div>
          )}
        </div>

        {/* Item 3 */}
        <div>
          <button
            onClick={() => toggleAccordion(3)}
            className={`w-full px-5 py-4 text-left font-medium flex justify-between items-center
  ${props.mode === "dark"
                ? "bg-[#042743] text-white hover:bg-[#06385c]"
                : "bg-gray-100 text-black"
              }`}
          >
            <strong>Browser Compatible</strong>
            <span>{openItem === 3 ? "−" : "+"}</span>
          </button>

          {openItem === 3 && (
            <div
              className={`p-5 ${props.mode === "dark"
                  ? "bg-[#24506f] text-white"
                  : "bg-white text-black"
                }`}
            >
              <p className="mt-2">
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
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