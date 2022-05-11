import React, { useState } from "react"
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/Users/Login"
import WelcomePage from "./components/WelcomePage";
import NavbarDesign from "./components/Navbar"
import LandingPage from "./components/LandingPage";
import PasswordRefresh from "./components/Users/PasswordRefresh";
import Register from "./components/Users/Register"
import BlogPostCards from "./components/BlogPostCards";
import About from "./components/Users/About";
import MembersPage from "./components/Users/MembersPage";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isStaffWriter, setIsStaffWriter] = React.useState(false)
  const [username, setUser] = React.useState()

  return (
    <div className="App">
      <>
        <h1 className="text-3xl font-bold font-sans mb-6 mt-6">Welcome to the Community Project</h1>
      </>

      <nav>
        {loggedIn ? (
          <> {isStaffWriter ? (
            <Link to="/blogwriting">Writing</Link>
          ) : (
            <Link to="/blogposts">Blog Reading</Link>
          )
          }
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
            {" | "}
            <Link to="/about">About</Link>
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
              onLogin={(username, userStatus) => {
                setLoggedIn(true)
                setUser(username)
                setIsStaffWriter(true)
              }} />} />
          <Route path="passwordrefresh" element={<PasswordRefresh />} />
          <Route path="about" element={<About />} />
          <Route path="blogposts" element={<BlogPostCards />} />
          <Route path="LandingPage" element={<LandingPage />} />
          <Route path="communitymembers" element={<MembersPage />} />
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

