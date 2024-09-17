import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { NavLink } from "react-router-dom"
import { 
    createToken, 
    createUser, 
    login, 
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
        dispatch(createUser({...user, data: null}))
        navigate("/", {replace: true})
    }
    return (
        <a className="logout-btn-container" onClick={disconnect} > Log Out
            {/* <div ><p onClick={disconnect} >Log Out</p></div> */}
        </a>
    )
}