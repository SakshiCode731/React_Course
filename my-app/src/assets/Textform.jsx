import React , { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText("You have clicked on handleUpClick")
    }

    const handleOnChange = ()=>{
        console.log("On change");
    }
    const [text, setText] = useState("Enter text here");
    // setText("new text");   to chnage the text use like this
    // text= newtext;   wrong way to chnage the state
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="w-full border border-gray-400 rounded p-2" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
            </div>
        </div>
    )
}