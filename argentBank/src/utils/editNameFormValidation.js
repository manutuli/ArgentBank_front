export const editNameFormValidation = (event) => {
    if (
        event.firstname.value &&
        event.lastname.value
    ) 
    {
        // console.log("edit name : ", event.firstname.value)
        return {
            firstName : event.firstname.value,
            lastName : event.lastname.value,
        }
    } else {
        return {error : true}
    }
}