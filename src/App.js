import React from 'react';
import './App.css';
import Hello from './Hello.js';
function App({name,age}) {
  return (
  
    <div>
      <h1>My Name Is {name} Age = {age - 5} </h1>
      <Hello></Hello>
    </div>
    
  )
}

export default App;
