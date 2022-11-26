import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './containers/login/login';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Router>  
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Login/>}/>
          <Route exact path="/admin" element={<Login/>}/>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
