import { NavLink, Outlet, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutBtn } from './components/LogoutBtn';
// 
export function App() {
  const user = useSelector((state)=>state.authentication.value)
  // 
  return (
    <>
    <nav className="main-nav">
      <div className="main-nav-logo" >
        <NavLink to="/">
          <img 
            src="assets/img/argentBankLogo.png"
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
      </div>
      <div className='main-nav-content'>
        <div className="main-nav-item">
          {
            user.isLogged 
            ? <NavLink to="/profile" >{user.data.firstName}</NavLink>
            : <NavLink to="/signup" >Sign Up</NavLink>
          }
        </div>
        <div className="main-nav-item">
          { 
            user.isLogged 
            ? <LogoutBtn/> 
            : <> 
            <NavLink to="/login" >
            <i className="fa fa-user-circle"></i>
            Sign In
            </NavLink> 
            </>
          }
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
