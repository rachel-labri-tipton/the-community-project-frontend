import React, { useState } from "react"
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/Users/Login"
import WelcomePage from "./components/WelcomePage";
import NavbarDesign from "./components/Navbar"
import PasswordRefresh from "./components/Users/PasswordRefresh";
import Register from "./components/Users/Register"
import BlogPostCards from "./components/BlogPostCards";
import BlogArticle from "./components/BlogArticle"
import About from "./components/Users/About";
import WritingDashboard from "./components/Users/WritingDashboard"
import MembersPage from "./components/Users/MembersPage";
import HomePage from "./components/HomePage"
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isStaffWriter, setIsStaffWriter] = React.useState(false)
  const [username, setUser] = React.useState()

  return (
    <div className="App">
      <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
          <div class=" pt-2 ml-6">
            <Link to="/"><img height={200} width={200} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/101/original/undraw_handcrafts_tree.png?1652343659" alt="tree" /></Link>
            <h1 class="font-sans">The Community Project</h1>

          </div>

          <div class="hidden space-x-6 md:flex md:w-3/4 md:justify-start">
            {loggedIn ? (
              <> {isStaffWriter ? (
                <Link to="/blogwriting">Write Something</Link>
              ) : (
                <Link to="/writeforus">Write For Us</Link>
              )
              }
                <Link to="blogposts">Blog</Link>
                <Link to="communitymembers">Community</Link>
                <div>Welcome back {username}! </div>
                <Link to="/about">About</Link>
                <Link to="/" onClick={() => {
                  setLoggedIn(false)
                  window.localStorage.clear()
                }}
                >Logout</Link>

              </>
            ) : (
              <>
                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>

                <Link to="/about">About</Link>
              </>
            )
            }
          </div>
        </div>
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
                setIsStaffWriter(false)
              }} />} />
          <Route path="passwordrefresh" element={<PasswordRefresh />} />
          <Route path="about" element={<About />} />
          <Route path="blogposts" element={<BlogPostCards />} />
          <Route path="blogposts/:id" element={<BlogArticle />} />
          <Route path="writingdashboard" element={<WritingDashboard />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="communitymembers" element={<MembersPage />} />
        </Routes>
      </main>
    </div>


  )

}


export default App

