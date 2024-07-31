import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App.jsx'
import {Signup} from "./pages/Signup.jsx"
import {Profile} from "./pages/Profile.jsx"
import {Login} from "./pages/Login.jsx"
import { Landing } from './pages/Landing.jsx'
import { Error } from "./pages/Error.jsx";
import { Account } from "./pages/Account.jsx";
export const router = createBrowserRouter([
  {
    element : <App/>,
    errorElement : <div>Erreur 404, App not found</div>,
    children : [
      {
        path : "/",
        element : <Landing />,
        errorElement : <div>Erreur 404, Home page not found</div>,
        // loader : console.log("landing")
      },
      {
        path : "/login",
        element : <Login />,
        errorElement : <div>Erreur 404, Login page not found</div>,
        // loader : console.log("login"),
      },
      {
        path : "/signup",
        element : <Signup />,
        errorElement : <div>Erreur 404, Signup page not found</div>,
        // loader : console.log("signup"),
      },
      {
        path : "/profile",
        element : <Profile/>,
        errorElement : <div>Erreur 404, Profile page not found</div>,
        // loader : console.log("profile"),
      },
      {
        path : "/error",
        element : <Error/>,
        errorElement : <div>Erreur 404, not found</div>,
        loader : console.log("error"),
      },
      {
        path : "/tansactions",
        element : <Account/>,
        errorElement : <div>Erreur 404, not found</div>,
        loader : console.log("tansactions"),
      },
    ],
  },
])