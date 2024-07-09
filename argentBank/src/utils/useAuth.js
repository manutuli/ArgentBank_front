// import { useState } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { createToken, createUser, login } from "../redux/features/authentication/authSlice";
// // import { useSessionStorage } from "../utils/useSessionStorage";
// // import { useNavigate } from "react-router-dom";
// // 
// // vérifier si isLogged
// // 
// export function useAuth(){
//     const [isLogged, setIsLogged] = useState(null)
//     function SetLogin ({...user}) {
//         const dispatch = useDispatch()
//         dispatch(login({...user, isLogged : true}))
//         setLogged(true)
//     }
//     function SetLogout ({...user}) {
//         const dispatch = useDispatch()
//         dispatch(login({...user, isLogged : false}))
//         setLogged(false)
//     }
//     // 
//     return [setIsLogged, SetLogin, SetLogout]
// }