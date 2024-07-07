import React, { useState } from 'react'
import TextSummary from '../Components/TextSummary.mjs';
export default function TextForms({ heading }) {
    let [text, setText] = useState("")
    //wrong way to change the state
    // text="new Text"; 
    //correct way to change the state
    // setText("new Text");

    const handleUpchange = () => {
        // console.log("Button of uppercase is pressed");
        setText(text.toUpperCase());
    }

    const handleClearchange = () => {
        // console.log("Button of uppercase is pressed");
        setText('');
    }

    const handleLowchange = () => {
        // console.log("Button of uppercase is pressed");
        setText(text.toLowerCase());
    }

    const handleOnchange = (event) => {
        // console.log("change property")
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="Mybox" className="form-label">{heading}</label>
                <textarea placeholder="Enter your text" className="form-control" id="Mybox" rows="8" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpchange}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowchange}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearchange}>Clear text</button>
            <div className="container my-3">
                <TextSummary Text={text} />
            </div>
        </>
    );
}
