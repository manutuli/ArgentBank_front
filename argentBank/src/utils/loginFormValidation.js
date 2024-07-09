export const loginFormValidation = (event) => {
    if (
        event.email.checkValidity() &&
        event.password.checkValidity() 
    ) {
        // console.log("pass : ", event.password.value)
        return {
            email : event.email.value,
            password : event.password.value,
            isRemember : event.remember.checked ? true : false,
        }
    } else {
        return {error : "erreur de validation (checkValidity)"}
    }
}