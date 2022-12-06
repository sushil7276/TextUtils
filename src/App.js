import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";

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
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is activated", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} switch={mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter Your text Here" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
