import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Tracker</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-link active" to={"/"}>Home</Link>
            <Link className="nav-link" to={"/"}>Home</Link>
            <Link className="nav-link" to={"/login"}>Login</Link>
            <Link className="nav-link" to={"/signup"}>SignUp</Link>
            <Link className="nav-link" to={"/todo"}>Todo</Link>
            <Link className="nav-link" to={"/demo"}>DEmo</Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}
