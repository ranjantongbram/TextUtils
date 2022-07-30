
import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#163718";
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }



  return (
    <>

      <BrowserRouter>

        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Switch>
            <Route exact path='/'>
              <TextForm heading="Enter the text below to analyze" mode={mode} show={showAlert} />
              {console.log('home')}
            </Route>
            <Route exact path='/about' >
              {console.log('about')}
            <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
