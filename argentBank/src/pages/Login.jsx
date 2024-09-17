import { loginFormValidation } from "../utils/loginFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "../redux/features/authentication/authSlice";
import { useNavigate } from "react-router-dom";
// 
export function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    const controller = new AbortController()
    const signal = controller.signal
    function submit(e){
        e.preventDefault()
        const form = loginFormValidation(e.target) 
        const isRemember = form.isRemember
        const session = window.sessionStorage
        const url = "http://localhost:3001/api/v1/user/login"
        const fetchToken = async () => {
            try {
                if (user.token) controller.abort();
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
                    session.setItem("token", token.token)
                }
                dispatch(createToken({...user, ...token}))
                navigate('/profile', {replace: true})
            } catch (error) {
                navigate('/error', {replace: true})
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
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
            </main>
        </>
    )
}