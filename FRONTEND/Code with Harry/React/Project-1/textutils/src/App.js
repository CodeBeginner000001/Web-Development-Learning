import './App.css';
import Navbar from './Components/Navbar.mjs';
import TextForms from './Components/TextForms';
import React, { useState } from 'react'
import Alert from './Components/Alert.mjs';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#171717';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing'
      // },2000);
      // setInterval(()=>{
      //   document.title='Install Now'
      // },1500);

    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForms heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
