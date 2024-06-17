import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from './App.jsx'
  import {Login} from "./pages/Login.jsx"
  import {Profile} from "./pages/Profile.jsx"
  import { Landing } from './pages/Landing.jsx';
  
  import './style/index.css'
  
  export const router = createBrowserRouter([
    {
      element : <App/>,
      children : [
        {
          path : "/",
          element : <Landing />,
          loader : console.log("landing")
        },
        {
          path : "/login",
          element : <Login />,
          loader : console.log("login")
        },
        {
          path : "/profile",
          element : <Profile />,
          loader : console.log("profile")
        },
      ],
    },
  ])