import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { 
    createToken, 
    createUser, 
    login, 
    // remember,
 } from "../redux/features/authentication/authSlice"
  // vider session storage
export function LogoutBtn () {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    function disconnect(){
        const session = window.sessionStorage
        session.clear()
        dispatch(createToken({...user, token: null}))
        dispatch(login({...user, isLogged: false}))
        // dispatch(remember({...user, isRemember: false}))
        dispatch(createUser({...user, data: null}))
        navigate("/", {replace: true})
    }
    return (
        <div><p onClick={disconnect} >Log Out</p></div>
        // <NavLink to="/" reloadDocument><p>Log Out</p></NavLink>
    )
}