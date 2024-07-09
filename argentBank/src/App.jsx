import './style/App.css'
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// 
export function App() {
  const user = useSelector((state)=>state.authentication.value)
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
          { user.isLogged 
          ? <NavLink to="/" reloadDocument><p>Log Out</p></NavLink> 
          : <NavLink to="/login" ><p>Sign In</p></NavLink> }
        </div>
      </div>
    </nav>
    {/* main */}
    <Outlet />
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </>
  )
}

export default App
