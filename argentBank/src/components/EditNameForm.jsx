import { useDispatch, useSelector } from "react-redux"
import { createUser, } from "../redux/features/authentication/authSlice"
import { editNameFormValidation } from "../utils/editNameFormValidation"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function EditNameForm(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    const navigate = useNavigate()
    const [isSuccess, setIsSuccess]= useState(false)
    // 
    function submit(e){
        e.preventDefault()
        const form = editNameFormValidation(e.target) 
        if (form.error) return  // navigate(-1)
        const url = "http://localhost:3001/api/v1/user/profile"
        const request = new Request(url, {
            method  : 'PUT',
            headers : {
                "accept" : "application/json",
                "Authorization" : "Bearer " + user.token,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({...form})
        });
        const fetchName = async () => {
            try {
                const response = await fetch(request)
                const res = await response.json()
                const {id, email, firstName, lastName,} = res.body
                console.log("new credentials : ", email, id, firstName, lastName)
                dispatch(createUser({
                    ...user, 
                    data: {
                        ...user.data,
                        firstName: firstName, 
                        lastName: lastName, 
                    }
                }))
                setIsSuccess(true)
            } catch (error) {
                // dispatch(createError({...user, isError: true}))
                // console.log("Erreur dans fetchName : ", error)
                navigate('/error', {replace: true})
            }
        }
        fetchName()
    }
    // if (user.isError) return dispatch(createError({...user, isError: false}));
    return (
        <>
        {isSuccess
        ? <p>Your last name is {user.data.lastName} !</p>
        : <section className="edit-name-wrapper">
            <i className="fa fa-user-circle sign-in-icon"></i>
            {/* <h2>Please enter your name : </h2> */}
            <form  onSubmit={submit}>
                <div className="edit-name-content">
                    <div className="input-wrapper">
                        {/* <label htmlFor="firstname">firstname</label> */}
                        <input placeholder={user.data.firstName} type="text" id="firstname" required aria-required="true"/>
                    </div>
                    <div className="input-wrapper">
                        {/* <label htmlFor="lastname">lastname</label> */}
                        <input placeholder={user.data.lastName} type="text" id="lastname" required aria-required="true"/>
                    </div>
                </div>
                <div className="edit-name-content"> 
                    <button type="submit" className="edit-name-button">Save</button>
                    <button className="edit-name-button" onClick={()=>setIsSuccess(true)}>Cancel</button>
                </div>
    
            </form>
        </section>
        }
        {isSuccess 
         && <div className="" ><button className="edit-button" onClick={()=>setIsSuccess(false)}>Edit Name</button></div> 
        }
        </>
    )
}