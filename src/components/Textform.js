
import React, {useState} from 'react'

export default function Textform(props) {
 const handleUpClick = ()=>{
  //  console.log ("Uppercase was clicked" + text);
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Text has been converted into Uppercase!", "success")
 }
 const handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Text has been converted into Lowercase!", "success")
 }
 const handleClearClick = ()=>{
  let newText = "";
  setText(newText)
  props.showAlert("Text has been cleared!", "success")
 }
 const handleOnChange = (event)=>{
    // console.log ("On change");
    setText(event.target.value);
    
   }

   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!", "success")
   }

   const handleExtraSpaces = () => {
    var  newText = text.split (/[ ]+ /);
    setText(newText.join("."))
    props.showAlert("Extra spaces removed!", "success")
   }

 const [text, setText] = useState('');
 // text = "new text";     // wrong way to change the state
 // setText = ("new text"); // correct way to change the state
 return (
  <>   
    <div className="container" style={{color:props.mode==='dark'?'white':'#18196e'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#08066abf'}} id="myBox" rows="3"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra spaces</button>

      </div> 
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#18196e'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
      </>
 )
}