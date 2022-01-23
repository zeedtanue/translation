import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import axios from 'axios';

const App : FC = () => {
  
  const [toTranslate, setToTranslate] = useState<string>("deu")
  const [fromTranslate, setFromToTranslate] = useState<string>("eng")
  const [text, setText] = useState<string>("")
  const [translated, setTranslated] = useState<string>("")

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.name === "from") {
      setFromToTranslate(event.target.value);
    } else if (event.target.name === "to"){
      setToTranslate(event.target.value);
    } 
  }
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement> ): void => {
    setText(event.target.value)
  }
  
  const translateFunc = () : void => {
    // const form = {
    //   method : 'POST',
    //   headers: { 'content-type': 'application/json', 'ApiToken': '00c76416-08fd-4709-938f-f83139b678db' }, 
    //   url: `https://api.cloudmersive.com/nlp-v2/translate/language/${fromTranslate}/to/${toTranslate}`
    // }
    // const response = fetch(`https://api.cloudmersive.com/nlp-v2/translate/language/${fromTranslate}/to/${toTranslate}`, {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json', 'ApiToken': '00c76416-08fd-4709-938f-f83139b678db', 'Access-Control-Allow-Origin': 'true' }, 
    // })
    
    
    console.log(fromTranslate, text, toTranslate, `https://api.cloudmersive.com/nlp-v2/translate/language/${fromTranslate}/to/${toTranslate}`)
  }

  return (
    <div className="App">
      <div className='header'>
        <label htmlFor="select"> From </label>
        <select name="from" id="" onChange={handleSelectChange}>
          <option value="eng">English</option>
          <option value="fra">French</option>
          <option value="deu">German</option>
          <option value="rus">Russian</option>

        </select>
        <div className='inputContainer'>
            <textarea 
              
              placeholder="Your text to translate..."
              name='text'
              onChange={handleInputChange}
            />
          </div>
        <label htmlFor="select"> To </label>
          <select name="to" id="" onChange={handleSelectChange}>
            <option value="deu">German</option>
            <option value="eng">English</option>
            <option value="fra">French</option>
            <option value="rus">Russian</option>

        </select>
          <button onClick={translateFunc}>Translate</button>
        </div>
      <div className='translation'>
        <div className='translationBox'></div>
      </div>
    </div>
  );
}

export default App;
