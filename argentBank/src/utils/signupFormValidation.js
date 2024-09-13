// import { useLocalStorage } from "./useLocalStorage"
// import { useFetch } from "./useFetch"
export function signupFormValidation(event) {
    if (
        event.email.checkValidity() &&
        event.firstname.checkValidity() &&
        event.lastname.checkValidity() &&
        event.password.checkValidity() 
    ) {
        return {
            email : event.email.value,
            firstname : event.firstname.value,
            lastname : event.lastname.value,
            password : event.password.value,
            isRemember : event.remember.checked ? "yes" : "no",
        }
    } else {
        return {error : "erreur de validation (checkValidity)"}
    }
}