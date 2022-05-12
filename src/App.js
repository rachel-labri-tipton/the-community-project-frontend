import React, { useState } from "react"
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from "./components/Users/Login"
import WelcomePage from "./components/WelcomePage";
import NavbarDesign from "./components/Navbar"
import LandingPage from "./components/LandingPage";
import PasswordRefresh from "./components/Users/PasswordRefresh";
import Register from "./components/Users/Register"
import BlogPostCards from "./components/BlogPostCards";
import BlogArticle from "./components/BlogArticle"
import About from "./components/Users/About";
import MembersPage from "./components/Users/MembersPage";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [isStaffWriter, setIsStaffWriter] = React.useState(false)
  const [username, setUser] = React.useState()

  return (
    <div className="App">
      <nav class="mx-w-full relative container mx-auto p-6 md:wd-3/4">
        <div class="flex items-center justify-between">
          <div class=" pt-2 ml-6">
            <img height={200} width={200} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/101/original/undraw_handcrafts_tree.png?1652343659" alt="tree" />
            <h1 class="font-sans">The Community Project</h1>
          </div>

          <div class="hidden space-x-6 md:flex md:w-3/4 md:justify-start">
            <Link to='/login'>Login</Link>
            <Link to='/about'>About</Link>
            <Link to='/community'>Meet People</Link>
            <Link to=''>Read our blog</Link>
            <Link to=''>Write for us</Link>
            <Link to='/register'>Register</Link>
          </div>
        </div>
        {/* mobile menu */}
        {/* <div class="md:hidden">
          <div id="menu" class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <Link to='/login'>Login</Link>
            <Link to='/about'>About</Link>
            <Link to='/community'>Meet People</Link>
            <Link to=''>Read our blog</Link>
            <Link to=''>Write for us</Link>
            <Link to='/register'>Register</Link>
          </div>
        </div> */}
      </nav>
      {/* <nav>
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
      </nav> */}
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
          <Route path="blogposts/:id" element={<BlogArticle />} />
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

