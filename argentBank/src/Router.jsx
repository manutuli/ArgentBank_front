import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from './App.jsx'
  import {Signup} from "./pages/Signup.jsx"
  import {Profile} from "./pages/Profile.jsx"
  import {Login} from "./pages/Login.jsx"
  import { Landing } from './pages/Landing.jsx'
  
  export const router = createBrowserRouter([
    {
      element : <App/>,
      errorElement : <div>Erreur 404</div>,
      children : [
        {
          path : "/",
          element : <Landing />,
          errorElement : <div>Erreur 404, Home not found</div>,
          // loader : console.log("landing")
        },
        {
          path : "/login",
          element : <Login />,
          errorElement : <div>Erreur 404, Login not found</div>,
          // loader : console.log("login"),
        },
        {
          path : "/signup",
          element : <Signup />,
          errorElement : <div>Erreur 404, Signup not found</div>,
          // loader : console.log("signup"),
        },
        {
          path : "/profile",
          element : <Profile/>,
          errorElement : <div>Erreur 404, Profile not found</div>,
          // loader : console.log("profile"),
        },
      ],
    },
  ])