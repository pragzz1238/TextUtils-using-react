import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let value = text.toUpperCase();
        setText(value);
    }
    const handleLoClick = () => {
        let value = text.toLowerCase();
        setText(value);
    }

    const handleUpChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleUpChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#06283D', color: props.mode === 'light' ? 'black' : 'white' }} id="Mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
               <h2>Your text summary</h2>
               <p>{text.split(" ").length-1} words and {text.length} characters</p>
               <h2>Preview</h2>
               <p>{text.length>0 ? text:"Enter Something in the text area to preview"}</p>
            </div>
            
        </>
    )
}

