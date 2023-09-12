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
   
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
   const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutials - Dark Mode';
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
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutials - Light Mode';
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
          <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} heading=" Try Textutials - Word Counter, Character Counter,Remove extra Spaces"/>}></Route>
          <Route exact path='/about' element={<About mode={mode} />}></Route>
        </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;