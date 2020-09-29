import React from 'react';
import "./App.css";
import Screen from './Screen.js';

function App() {
  return (
    <div className="App">
      <script type = 'text/javascript' src='./Screen.js'></script>
      <Screen />
      <div id="display" className='display'>
        <img src="../assets/Warrior/Animations/Jump/Jump__000.png"/>
        Hello World
      </div>
    </div>
  );
}

export default App;
