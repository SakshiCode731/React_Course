import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handletoCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to clipboard!", "success");
    }

    const handleSearch = () => {
        let word = prompt("Enter the word to search");
        if (text.includes(word)) {
            alert("The word is present in the text");
        } else {
            alert("The word is not present in the text");
        }
        props.showAlert("Searched for the word!", "success");
    }

    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new text");   to chnage the text use like this
    // text= newtext;   wrong way to chnage the state
    return (
        <>
            <div className="container mx-auto" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="w-full border border-gray-400 rounded p-2" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2 my-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2 my-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2 my-2" onClick={handleSearch}>
                    Search Word
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 ml-2 rounded" onClick={handletoCopy}>
                    Copy Word
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 mt-2 ml-2 rounded" onClick={handleExtraSpaces}>
                    Handle Space
                </button>
            </div>
            <div className="container mx-auto my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary  </h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and  {text.length} character</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minute read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter some text to preview it here."}</p>
            </div>
        </>
    )
}