import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");


    const handelUpperCaseClick = () => {
        // console.log("You Click on UpperCase Button: " + text);  //This For debuging perpose
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handelLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handelClear = () => {
        setText("");
        props.showAlert("Clear Text", "success");
    }

    const handelCopy = () => {
        let texts = document.getElementById("box");
        texts.select();
        navigator.clipboard.writeText(texts.value);
        props.showAlert("Copy Text", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");   // This For debuging perpose
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#00214a" }}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "#142854" : "white", color: props.mode === "dark" ? "white" : "#00214a" }} value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpperCaseClick}>Convaert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelLowerCaseClick}>Convaert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelClear}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Space</button>

            </div>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#00214a" }}>
                <h2 className='my-3'>Your Text Summary</h2>
                <p>{text.split(" ").filter((elemet) => { return elemet.length !== 0 }).length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((elemet) => { return elemet.length !== 0 }).length} Minuts Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
