import React, { useState } from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#6f42c1' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#6f42c1', color: props.mode === 'light' ? '#6f42c1' : 'white' }} id="TextArea" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                {/* <button className="btn btn-success mx-2" onClick={handlePasteClick}>Paste Text</button> */}
                <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#6f42c1' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text === "" ? "Nothing to Preview!" : text}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: propTypes.string
}
