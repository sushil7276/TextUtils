import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <TextForm heading="Enter Your text Here"/>
      <About />
    </>
  );
}

export default App;
