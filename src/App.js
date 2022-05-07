import React from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import WelcomePage from "./components/WelcomePage";
import NavbarDesign from "./components/Navbar"
import TailWind from "./components/TailWindSource";
import Register from "./components/Register"
import BlogPost from "./components/BlogPosts";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<NavbarDesign />}> */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="TailWindPractice" element={<TailWind />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="blogposts" element={<BlogPost />} />
          {/* </Route> */}
        </Routes>
      </Router>

    </div>

  )
}


export default App

