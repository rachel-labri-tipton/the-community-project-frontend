import React, { useState } from "react"
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/Login"
import WelcomePage from "./components/WelcomePage";
import NavbarDesign from "./components/Navbar"
import LandingPage from "./components/LandingPage";
import Register from "./components/Register"
import BlogPost from "./components/BlogPosts";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isAuthor, setIsAuthor] = React.useState(false)
  const [username, setUser] = React.useState()

  return (
    <div className="App">
      <>
        <h1 className="text-3xl font-bold font-serif underline mb-6 mt-6">Welcome to the Community Project</h1>
      </>

      <nav>
        {loggedIn ? (
          <>
            <div>Welcome back {username} ! </div>
            <Link to="blogposts">Blogposts</Link>
            {" | "}
            <Link to="communitymembers">Community Members</Link>
            {" | "}
            <Link to="landingpage">LandingPage</Link>
            {" | "}
            <Link to="logout" onClick={() => {
              setLoggedIn(false)
              window.localStorage.clear()
            }}
            >LogOut</Link>

          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            {" | "}
            <Link to="/register">Register</Link>
          </>
        )
        }
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<Register
            onRegister={(username) => { setUser(username) }}
          />} />
          <Route
            path="login"
            element={<Login
              onLogin={(username) => {
                setLoggedIn(true)
                setUser(username)
              }} />} />
          <Route path="blogposts" element={<BlogPost />} />
          <Route path="LandingPage" element={<LandingPage />} />
          <Route path="communitymembers" element={<CommunityMembers />} />
        </Routes>
      </main>
    </div>

  )
}

const CommunityMembers = () => {
  return (
    <h1>This is our Member Page</h1>
  )
}

export default App

