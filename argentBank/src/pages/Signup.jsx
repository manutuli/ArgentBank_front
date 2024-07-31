import { useNavigate } from "react-router-dom";
import { signupFormValidation } from "../utils/signupFormValidation";
// import { useDispatch, useSelector } from "react-redux";
export function Signup() {
    const navigate = useNavigate()
    // const dispatch = useDispatch()
    // const user = useSelector((state) => state.authentication.value)
    // 
    function submit(e) {
        e.preventDefault()
        const url = "http://localhost:3001/api/v1/user/signup"
        const form = signupFormValidation(e.target)
        const request = new Request(url, {
            headers : {
                "accept" : "application/json",
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : JSON.stringify({
                "email" : form.email,
                "password" : form.password,
                "firstName" : form.firstname,
                "lastName" : form.lastname
            }),
        });
        const fetchSignup = async ()=>{
            try {
                const response = await fetch(request)
                const res = await response.json()
                const {email} = res.body
                console.log("signup credentials : ", email)
                // useEffect ?
                navigate("/login", {replace: true})
            } catch (error) {
                // dispatch(createError({...user, isError: true}))
                // console.log("Dans fetch signup", error)
                navigate('/error', {replace: true})
            }
        }
        fetchSignup()
    }
    return (
        <>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Create new Account</h1>
                <form  onSubmit={submit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" required aria-required="true"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" id="firstname" required aria-required="true"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">lastname</label>
                        <input type="text" id="lastname" required aria-required="true"/>
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