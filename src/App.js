import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
   setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'Textutials - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutials is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutials Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = 'Textutials - Light Mode';
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="Textutials" aboutText="About Us"/> */}
    {/* <Navbar/> */}
     <Navbar title="Textutials" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analize below" mode={mode}/> */}
    {/* <About /> */}
    <Routes>
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analize below" mode={mode}/>}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;
