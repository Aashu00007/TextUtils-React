import React,{useState} from 'react'

export default function TextForm(props) {
  
    const[text,setText]=useState('');
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case ","success")
    }
    const handleloclick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower case ","success")
    }
    const handleCopy=()=>{
       var text= document.getElementById('myBox');
       text.select();
       navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();
       props.showAlert("Text copied ","success")
    }
    const handleClearText=()=>{
        setText('');
        props.showAlert("Textarea has been cleared ","success")
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed ","success")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-2'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='light'?'white':'#13466e', color:props.mode==='dark'?'white':'#042743'}} onChange={handleonchange}></textarea>
</div>
<button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1 "onClick={handleupclick}>Convert to Upper case</button>
<button  disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1"onClick={handleloclick}>Convert to Lower case</button>
<button  disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1 "onClick={handleCopy}>Copy text</button>
<button  disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1"onClick={handleClearText}>Clear text</button>
<button  disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
