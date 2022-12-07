import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");  // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#00214a";
      showAlert("Dark Mode is activated", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is activated", "success");
      document.title = "TextUtils - light Mode";
    }
  }

  return (
    <>

      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switch={mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your text Here" mode={mode} />} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
