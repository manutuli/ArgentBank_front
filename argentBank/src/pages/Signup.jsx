// import { useState } from "react";
// import { formValidation } from "../utils/formValidation";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../redux/features/authentication/authSlice";
export function Signup() {
    // const [data, setData] = useState("no data :(")
    // const dispatch = useDispatch()
    // const user = useSelector((state) => state.authentication)
    return (
        <>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form  onSubmit={(e)=>{
                    e.preventDefault()
                    // const url = "http://localhost:3001/api/v1/user/signup"
                    // const form = formValidation(e.target)
                    // const request = new Request({
                    //     url,
                    //     method : 'POST',
                    //     body : {
                    //         "email" : form.email,
                    //         "password" : form.password,
                    //         "firstName" : form.firstname,
                    //         "lastName" : form.lastname
                    //     },
                    // })
                }}>
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