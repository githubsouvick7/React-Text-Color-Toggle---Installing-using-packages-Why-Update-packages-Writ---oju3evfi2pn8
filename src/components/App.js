import React, { useEffect, useState } from 'react'
import '../styles/App.css';

const App = () => {
  //code here 
  const [isRed, setIsRed] = useState(true);

  const handleClick = () => {
    setIsRed(!isRed);
  };
  return (
    <div id="main">
      <p className={`text ${isRed ? "red" : "blue"}`}>Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  )
}


export default App;
