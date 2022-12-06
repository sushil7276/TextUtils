import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");


    const handelUpperCaseClick = () => {
        // console.log("You Click on UpperCase Button: " + text);  //This For debuging perpose
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handelClear = () => {
        setText("");
    }

    const handelCopy = () => {
        let texts = document.getElementById("box");
        texts.select();
        navigator.clipboard.writeText(texts.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("On Change");   // This For debuging perpose
        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handelUpperCaseClick}>Convaert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelLowerCaseClick}>Convaert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelClear}>Clear</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Space</button>

            </div>
            <div className="container">
                <h2 className='my-3'>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minuts Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
