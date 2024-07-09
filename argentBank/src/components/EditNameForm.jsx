import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../redux/features/authentication/authSlice"
import { editNameFormValidation } from "../utils/editNameFormValidation"
import { useState } from "react"
export function EditNameForm(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    const [isSuccess, setIsSuccess]= useState(false)
    function submit(e){
        e.preventDefault()
        const form = editNameFormValidation(e.target) 
        console.log("valid form : ", form)
        if (form.error) return  // navigate(-1)
        const url = "http://localhost:3001/api/v1/user/profile"
        const request = new Request(url, {
            method  : 'PUT',
            headers : {
                "accept" : "application/json",
                "Authorization" : "Bearer " + user.token
            },
            body : JSON.stringify({...form})
        })
        const startFetching = async () => {
            try {
                const response = await fetch(request)
                const res = await response.json()
                const {id, email} = res.body
                console.log("new credentials : ", email, id)
                dispatch(createUser({
                    ...user, 
                    data: {
                        ...user.data,
                        firstName: form.firstName, 
                        lastName: form.lastName,
                    }
                }))
                setIsSuccess(true)
            } catch (error) {
                console.log("Erreur dans startFetching : ", error)
            }
        }
        startFetching()
    }
    return (
        isSuccess
        ? <p>Your last name is {user.data.lastName} !</p>
        : <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h2>Please enter your name : </h2>
            <form  onSubmit={submit}>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">firstname</label>
                        <input type="text" id="firstname" required aria-required="true"/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">lastname</label>
                        <input type="text" id="lastname" required aria-required="true"/>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <NavLink to="/profile" >
                        <div className="sign-in-button">Sign In</div>
                    </NavLink> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
        </section>

    )
}