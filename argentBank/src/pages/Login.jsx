import { loginFormValidation } from "../utils/loginFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { 
    createToken, 
    // remember,
 } from "../redux/features/authentication/authSlice";
import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// 
export function Login() {
    // const ref = useRef(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    const controller = new AbortController()
    const signal = controller.signal
    function submit(e){
        e.preventDefault()
        const form = loginFormValidation(e.target) 
        const isRemember = form.isRemember
        const url = "http://localhost:3001/api/v1/user/login"
        const fetchToken = async () => {
            try {
                if (user.token) controller.abort()
                const response = await fetch(new Request(url, {
                        method : "POST",
                        headers : {
                            "content-type" : "application/json",
                            "accept" : "application/json"
                        },
                        signal : signal,
                        body : JSON.stringify({...form})
                    }));
                const res = await response.json()
                const {...token} = res.body
                if (isRemember === true) {
                    // ref.current = token.token
                    window.sessionStorage.setItem("token", token.token)
                    // const sessionStorage = window.sessionStorage
                    // console.log("session token : ", sessionStorage.getItem("token"))
                    // dispatch(remember({...user, isRemember: isRemember}))
                }
                dispatch(createToken({...user, ...token}))
                navigate('/profile', {replace: true})
            } catch (error) {
                console.log("Erreur dans fetchToken : ", error)
                navigate('/', {replace: true})
            }
        }
        fetchToken()
    }
    return (
        <>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form  onSubmit={submit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" required aria-required="true"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required aria-required="true"/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember"/><label htmlFor="remember">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <NavLink to="/profile" >
                        <div className="sign-in-button">Sign In</div>
                    </NavLink> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
            </main>
        </>
    )
}