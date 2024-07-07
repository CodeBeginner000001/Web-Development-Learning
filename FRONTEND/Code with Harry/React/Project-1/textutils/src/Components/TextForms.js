import React, { useState } from 'react'
import TextSummary from '../Components/TextSummary.mjs';
import "./placeholdertext.css"
export default function TextForms({ heading,mode,showAlert }) {
    let [text, setText] = useState("")
    //wrong way to change the state
    // text="new Text"; 
    //correct way to change the state
    // setText("new Text");

    const handleUpchange = () => {
        // console.log("Button of uppercase is pressed");
        setText(text.toUpperCase());
        showAlert("Converted to Upper Case...","success")
    }

    const handleClearchange = () => {
        // console.log("Button of uppercase is pressed");
        setText('');
        showAlert("Cleared the text area...","success")
    }

    const handleLowchange = () => {
        // console.log("Button of uppercase is pressed");
        setText(text.toLowerCase());
        showAlert("Converted to Lower Case...","success")

    }

    const handleCopy = ()=>{
        var text = document.getElementById("Mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Copied to Clipboard...","success")
    }

    const handleExtraspaces=()=>{
        setText(text.split(/[ ]+/).join(" "));
        showAlert("Removed Extra spaces","success")

    }

    const handleOnchange = (event) => {
        // console.log("change property")
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="Mybox" className={`form-label b text-${mode==='light'?'dark':'light'}`}>{heading}</label>
                <textarea placeholder="Enter your text" className={`form-control bg-${mode==='light'? 'light' : 'dark'} text-${mode==='light'? 'dark' : 'light'} ${mode==='light'?'black':'white'}-placeholder`} id="Mybox" rows="8" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpchange}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowchange}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearchange}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraspaces}>Remove extra spaces</button>
            <div className="container my-3">
                <TextSummary Text={text} mode={mode} />
            </div>
        </>
    );
}
