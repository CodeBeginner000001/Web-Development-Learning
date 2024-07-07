import './App.css';
import Navbar from './Components/Navbar.mjs';
import TextForms from './Components/TextForms';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils"/> */}
      <Navbar title="TextUtils" about="About" />
      <div className="container my-3 ">
        <TextForms heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;
