import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';

function App() {
  const [mode, setMode] = useState('light')
  const [color, setColor] = useState('#FFFFF7')
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      setColor("#454545")
      document.body.style.backgroundColor = "#2f2f2f"
    }
    else{
      setMode("light")
      setColor("#FFFFF7")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Textutils heading="Text Utilities" heading2="Replace Word" mode={mode} color={color}/>
    </>
  );
}

export default App;