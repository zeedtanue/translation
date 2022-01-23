import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <select name="" id="">
          <option value="">Bangla</option>
          <option value="">English</option>

        </select>
        <div className='inputContainer'>
            <textarea 
              
              placeholder="Your text to translate..."
              name='text'
            />
          </div>
          <select name="" id="">
          <option value="">Bangla</option>
          <option value="">English</option>

        </select>
          <button >Translate</button>
        </div>
      <div className='translation'></div>
    </div>
  );
}

export default App;
