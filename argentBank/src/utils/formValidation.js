// import { useLocalStorage } from "./useLocalStorage"
// import { useFetch } from "./useFetch"
export function formValidation(event) {
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
    // if (
    //     !event.email.value ||
    //     !event.firstname.value ||
    //     !event.lastname.value ||
    //     !event.password.value ||
    //     typeof event.email.value !== "string" ||
    //     typeof event.firstname.value !== "string" ||
    //     typeof event.lastname.value !== "string" ||
    //     typeof event.password.value !== "string" ||
    //     typeof event.remember.value !== "string" 
    // ) return console.log("erreur de validation");
}