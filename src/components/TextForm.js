import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        // console.log("Click");
        setText(newText);
        props.show("Changed to Uppercase!!", "Success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        // console.log("Click");
        setText(newText);
        props.show("Changed to Lowercase!!", "Success")
    }
    const handleClearClick = () => {
        let newText = "";
        // console.log("Click");
        setText(newText);
        props.show("Text Cleared!!", "Success")
    }
    const handleReaverseClick = () => {
        let newText = text.split("").reverse().join("");
        // console.log("Click");
        setText(newText);
        props.show("Text has been reversed!!", "Success")
    }

    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }

    const handleCopyClick = () => { 
        let copyText = document.getElementById("myTextBox");       
        // copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.show("Copied to clipboard!!", "Success")
         }

    // Count the words
    // const [word , setWord] = useState(0);

    function countWord(getwords){
          let res = [];
          let str = getwords.replace(/[\t\n\r.?!]/gm, " ").split(" ");
          str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
              res.push(trimStr);
            }
            return null;
          });
          return res.length;
        };
    
    

    return (
        <>
            <div className='container'>
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
                <div className="mb-3" >
                    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#163718', color: props.mode === 'light' ? 'black' : 'white' }} id="myTextBox" rows="10"></textarea>
                </div>
                <button className="btn btn-success my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success my-3 mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-success my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-success my-3 mx-2" onClick={handleReaverseClick}>Reverse the Text</button>
                <button className="btn btn-success my-3 mx-2" onClick={handleCopyClick}>Copy the Text</button>
            </div>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Text Summary</h3>
                <p id="show">{countWord(text)} Words and {text.length}</p>
                <span id="min">{countWord(text) * 0.0008}</span> <span>Minutes read</span>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
