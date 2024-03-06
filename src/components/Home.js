import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import '../css/Body.css';

function Home() {
  const[text,setText]=useState('');
  const [word, setWord] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [userLimit, setUserLimit] = useState(250);
  const handlechange = (e) => {
    const data = e.target.value.split(' ');

    if (data.length <= userLimit) {
      setText(e.target.value);
      setWord(data.length);
      setShowAlert(false);
    } else {
      setShowAlert(true); // Show the alert if condition is not met
    }
  };

  const handleLimitChange = (e) => {
    const limit = parseInt(e.target.value, 10);
    setUserLimit(limit || 0); // Ensure that the input is a number
  };
  const handleUpClick=(e)=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const handleLoClick=(e)=>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const handleclearClick=(e)=>{
    let newtext='';
    setText(newtext)
  }
  const handlecopy=(e)=>{
    let text=document.getElementById('textbox');
    text.select()
    navigator.clipboard.writeText(text.value)
    alert('Text copied to clipboard!');
  }
  const handleextraspaces=(e)=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
      {showAlert && (
        <div className="alert alert-dismissible alert-danger">
          <button type="button" className="btn-close" onClick={() => setShowAlert(false)}></button>
          <strong>Oh snap!</strong> Limit reached {userLimit} words. Increase the limit to enter more words.
        </div>
      )}

      <div className='container'>
        <div className='body Row col-sm-5'>
          <h1>Enter or paste your text here.</h1>
          <label htmlFor="wordLimit" className="form-label">Set Word Limit:</label>
          <input
            type="number"
            id="wordLimit"
            className="input form-control"
            value={userLimit}
            onChange={handleLimitChange}
          />
        </div>

          <div className="body">
            <textarea  value={text} onChange={(e) => handlechange(e)} className="form-control" id="textbox" rows="6"/>
            <output>
              <p>Word Count: {word}</p>
              <p>Alphabet Count: {text.length}</p>
              <p>{0.008*word} minutes to read</p>
            </output>
            <div className='bodybtns'>
            <button className="btn btn-secondary mx-2 my-2 my-sm-0" type="submit" onClick={handleUpClick}>Convert text to uppercase</button>
            <button className="btn btn-secondary mx-2 my-sm-0" type="submit" onClick={handleLoClick}>Convert text to lowercase</button>
            <button className="btn btn-secondary mx-2 my-2 my-sm-0" type="submit" onClick={handlecopy}>Copy text</button>
            <button className="btn btn-secondary mx-2 my-sm-0" type="submit" onClick={handleclearClick}>Clear textbox</button>
            <button className="btn btn-secondary mx-2 my-2 my-sm-0" type="submit" onClick={handleextraspaces}>Handle spaces</button>
            </div>
            <h2>Previews</h2>
            <p className='preview'>{text}</p>
          </div>
          
        </div>
    </>
  );
}

export default Home;
