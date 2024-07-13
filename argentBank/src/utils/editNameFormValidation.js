export const editNameFormValidation = (event) => {
    if (
        event.firstname.value &&
        event.lastname.value
    ) 
    {
        return {
            firstName : event.firstname.value,
            lastName : event.lastname.value,
        }
    } else {
        return {error : true}
    }
}