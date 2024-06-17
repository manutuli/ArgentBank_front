// import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import './style/App.css'
// 
export function App() {
  // const [user, setUser] = useState(null)
  return (
    <>
    <nav className="main-nav">
      <div className="main-nav-logo" >
        <NavLink to="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
      </div>
      <div>
        <div className="main-nav-item">
          <NavLink to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
    {/* main */}
    <Outlet/>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </>
  )
}

export default App
