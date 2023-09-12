import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Upper case", "Success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lower case", "Success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "Success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "Success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "Success");
    }
    const handleOnChange = (event)=>{
        console.log("Upper case was clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; //this is a wrong way to change the state
    // setText("new  text");  //Correct way to change the state
    
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Conver to UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Conver to LowerCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
