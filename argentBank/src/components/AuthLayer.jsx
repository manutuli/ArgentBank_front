import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
    createToken, 
    login, 
    createUser,
 } from "../redux/features/authentication/authSlice";
// 
export function AuthLayer(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) =>state.authentication.value)
    useEffect(()=>{
        const session = window.sessionStorage
        function disconnect(){
            session.clear()
            dispatch(createToken({...user, token: null}))
            dispatch(login({...user, isLogged: false}))
            dispatch(createUser({...user, data: null}))
            navigate("/", {replace: true})
        }
        if (session.getItem("token")) {
            console.log("stay connected !")
            dispatch(createToken({...user, token: session.getItem("token")}))
        } else {
            console.log("going home !")
            disconnect()
        }
    })
}