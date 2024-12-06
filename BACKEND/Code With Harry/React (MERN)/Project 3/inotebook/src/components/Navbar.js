import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom' // it is use returns the pathname of the current route
const Navbar = () => {
  let location = useLocation(); // alloting useLocation a variable
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]) // reload the page when the path changes
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">iNotebook</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</a>
            </li>
          </ul>
          <form className="d-flex">
            <Link type="button" className="btn btn-warning mx-1" to="/login">Login</Link>
            <Link type="button" className="btn btn-warning mx-1" to="/signup">Sign Up</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
