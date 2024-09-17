import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { createUser, } from "../redux/features/authentication/authSlice"
import { editNameFormValidation } from "../utils/editNameFormValidation"
import { useNavigate } from "react-router-dom"

export function EditNameForm({
    // isFormHidden,
    onFormHidden,
}){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.authentication.value)
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
                const {firstName, lastName,} = res.body
                // console.log("new credentials : ", firstName, lastName)
                dispatch(createUser({
                    ...user, 
                    data: {
                        ...user.data,
                        firstName: firstName, 
                        lastName: lastName, 
                    }
                }))
            } catch (error) {
                navigate('/error', {replace: true})
            }
        }
        fetchName()
        onFormHidden(true)
    }
    return (
        <>
        { <section className="edit-name-wrapper">
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
                    <button className="edit-name-button" onClick={()=>onFormHidden(true)}>Cancel</button>
                </div>
    
            </form>
        </section>
        }
        {/* {isFormHidden
        // isSuccess 
         && <div className="" ><button className="edit-button" onClick={()=>onFormHidden(false)}>Edit Name</button></div> 
        } */}
        </>
    )
}
EditNameForm.propTypes = {
    // isFormHidden: PropTypes.bool,
    onFormHidden: PropTypes.func,
};
// export default EditNameForm;