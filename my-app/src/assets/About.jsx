import { useState } from "react";

export default function Accordion() {
  const [openItem, setOpenItem] = useState(1);

  const toggleAccordion = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

 

  return (
    <>
    
     <h1 className="text-2xl font-bold text-blue-500">About Us</h1>
    <div className="max-w-3xl mx-auto mt-6 border border-gray-300 rounded-lg overflow-hidden">
      

      {/* Item 1 */}
      <div className="border-b">
       
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full px-5 py-4 text-left font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        >
          Accordion Item #1
          <span>{openItem === 1 ? "−" : "+"}</span>
        </button>

        {openItem === 1 && (
          <div className="p-5 bg-white">
            <strong>This is the first item’s accordion body.</strong>
            <p className="mt-2 text-gray-600">
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
          className="w-full px-5 py-4 text-left font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        >
          Accordion Item #2
          <span>{openItem === 2 ? "−" : "+"}</span>
        </button>

        {openItem === 2 && (
          <div className="p-5 bg-white">
            <strong>This is the second item’s accordion body.</strong>
            <p className="mt-2 text-gray-600">
              It is hidden by default and appears when the button is clicked.
            </p>
          </div>
        )}
      </div>

      {/* Item 3 */}
      <div>
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full px-5 py-4 text-left font-medium bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        >
          Accordion Item #3
          <span>{openItem === 3 ? "−" : "+"}</span>
        </button>

        {openItem === 3 && (
          <div className="p-5 bg-white">
            <strong>This is the third item’s accordion body.</strong>
            <p className="mt-2 text-gray-600">
              This section expands when selected and closes the others.
            </p>
          </div>
        )}
      </div>

    </div>
  

</>
  );
}