import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar.mjs';
import News from './Components/News.mjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let yourApiKey = "b6249cc9134047a688dd8498b7620e33"
  let Ctry = "in";

  let [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News key="home" setProgress={setProgress} pageSize={6} country={Ctry} category={"business"} api_key={yourApiKey} />} />
          <Route exact path="/business" element={<News key="business" setProgress={setProgress} pageSize={6} country={Ctry} category={"business"} api_key={yourApiKey} />} />
          <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} pageSize={6} country={Ctry} category={"entertainment"} api_key={yourApiKey} />} />
          <Route exact path="/general" element={<News key="general" setProgress={setProgress} pageSize={6} country={Ctry} category={"general"} api_key={yourApiKey} />} />
          <Route exact path="/health" element={<News key="health" setProgress={setProgress} pageSize={6} country={Ctry} category={"health"} api_key={yourApiKey} />} />
          <Route exact path="/science" element={<News key="science" setProgress={setProgress} pageSize={6} country={Ctry} category={"science"} api_key={yourApiKey} />} />
          <Route exact path="/sports" element={<News key="sports" setProgress={setProgress} pageSize={6} country={Ctry} category={"sports"} api_key={yourApiKey} />} />
          <Route exact path="/technology" element={<News key="technology" setProgress={setProgress} pageSize={6} country={Ctry} category={"technology"} api_key={yourApiKey} />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
