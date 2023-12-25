import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textutils(props) {
    const [text, setText] = useState("")
    const [buttontext, changedButtonText] = useState("Switch to Uppercase")
    const handleOnClicked = () => {
        if(text === text.toUpperCase()){
            let newText = text.toLowerCase();
            setText(newText);
            changedButtonText("Switch to Uppercase")
        }
        else{
            let newText = text.toUpperCase();
            setText(newText);
            changedButtonText("Switch to Lowercase")
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = () => {
        setText("")
    }

    const handleCapitalizeWord = () => {
        setText((text + '').replace(/^(.)|\s(.)/g, function ($1) {return $1.toUpperCase()}))
    }
    //letter count
    var letters = text.trim(' ').length

    //word count
    var words = text.split(/\s+/).filter(Boolean).length;
    
    //replace text
    const handleReplaceText = () => {
        var t = document.getElementById("floatingTextarea");
        var from = document.getElementById("floatingTextarea2");
        var to = document.getElementById("floatingTextarea3");
        
        var cs = document.getElementById("flexCheckDefault");
        var scope;
        
        var ff = from.value.replace("%N", "\n");
        var tt = to.value.replace("%N", "\n");
        
        if(cs.checked)scope = 'g';
        else scope = 'gi';
        
        var temp = t.value;
        temp = temp.replace(new RegExp(ff, scope), tt);
        t.value = temp;
        
        from.value = '';
        to.value = '';
        setText(t.value)
    }
       
  return (
    <>
        <style> 
            {` 
                ::placeholder { 
                    color: ${props.color==='#b2b2b2'?'#454545':'#b2b2b2'} !important; 
                }
                #floatingTextarea { 
                    color: ${props.color==='#FFFFF7'?'#454545':'#FFFFF7'} !important;
                    border-color: #747474 !important;
                    min-height: 200px !important;
                    max-height: 2000px !important;
                }
                #floatingTextarea2 { 
                    color: ${props.color==='#FFFFF7'?'#454545':'#FFFFF7'} !important;
                    border-color: #747474 !important;
                    height: 40px;
                    width: 220px;
                    resize: none;
                    margin-right:10px;
                }
                #floatingTextarea3 { 
                    color: ${props.color==='#FFFFF7'?'#454545':'#FFFFF7'} !important;
                    border-color: #747474 !important;
                    height: 40px;
                    width: 220px;
                    resize: none;
                    margin-left:10px;
                }
                #replace { 
                    display: flex;
                }
                #hand {
                    margin-top: 16px;
                    font-size: 20px;
                }` 
            } 
        </style>
        <div className='container my-3'>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <textarea className={`form-control my-3 bg-${props.mode}`} placeholder="write your text here" value={text} onChange={handleOnChange} id="floatingTextarea"></textarea>
            <button className="btn btn-primary my-1" onClick={handleOnClicked}>{buttontext}</button>
            <button className="btn btn-primary my-1 mx-2" onClick={handleCapitalizeWord}>Capitalize Words</button>
            <button className="btn btn-primary my-1" onClick={() => {navigator.clipboard.writeText(text);}}>Copy</button>
            <button className="btn btn-primary my-1 mx-2" onClick={handleClear}>Clear text</button>
            <div className="summary" style={{display:'flex'}}>
                <p className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{letters} letters</p>
                <p className={`mx-4 my-3 text-${props.mode==='light'?'dark':'light'}`}>{words} words</p>
            </div>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading2}</h2>
            <div className="replace my-1" id='replace'>
                <textarea className={`form-control my-3 bg-${props.mode}`} placeholder="find" id="floatingTextarea2"></textarea>
                <p id='hand'>&#128073;</p>
                <textarea className={`form-control my-3 bg-${props.mode}`} placeholder="replace" id="floatingTextarea3"></textarea>
            </div>
            <div className="form-check my-1">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexCheckDefault">
                    Case Sentitive
                </label>
            </div>
            <button className="btn btn-primary my-3" onClick={handleReplaceText}>Find & Replace</button>
        </div>
        <p></p>
    </>
  )
}

Textutils.propTypes = {
    heading: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired
}

Textutils.defaultProps = {
    heading: "Heading 1",
    heading2: "Heading 2"
}
