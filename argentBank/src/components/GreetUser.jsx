import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { EditNameForm } from "./EditNameForm.jsx"
export function GreetUser ({
    isFormHidden,
    onFormHidden,
}) {
    const user = useSelector((state) => state.authentication.value)
    return (
        <>
        {isFormHidden && user.data?.firstName 
            ?  <h1>Welcome back<br />{user.data?.firstName}</h1>
            :  <h1>Welcome back<br />{" "}</h1>
        }
        {
        isFormHidden 
        ? <> 
        <button 
            onClick={() => {return isFormHidden ? onFormHidden(false) : onFormHidden(true)}} 
            className="edit-button"
        >
            Edit Name
        </button>
        </>
        : <EditNameForm isFormHidden={isFormHidden} onFormHidden={onFormHidden} /> 
    }
        </>
    )
}
 GreetUser.propTypes = {
    isFormHidden: PropTypes.bool,
    onFormHidden: PropTypes.func,
};
// export default GreetUser