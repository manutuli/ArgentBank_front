// import { useSelector, useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom";
// import { createToken, createUser, login } from "../redux/features/authentication/authSlice";
// import { useEffect } from "react";
// export function useFetch(){
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.authentication.value)
//     function FetchAuth(){
//         // const [data, setData] = useState(null) 
//         useEffect(()=>{
//             const url = "http://localhost:3001/api/v1/user/profile"
//             const request = new Request(url, {
//                 method  : 'POST',
//                 headers : {
//                     "accept" : "application/json",
//                     "Authorization" : "Bearer " + user.token
//                 }
//             })
//             const startFetching = async () => {
//                 try {
//                     const response = await fetch(request)
//                     const res = await response.json()
//                     const data = {...res.body}
//                     dispatch(login({...user, isLogged : true}))
//                     dispatch(createUser({...user, data : data}))
//                     // setData({...data})
//                     // navigate("/profile", {replace: true})
//                 } catch (error) {
//                     console.log("Erreur dans fetchAuth : ", error)
//                     navigate("/login")
//                 } finally {
//                     console.log("finally : ", user)
//                 }
//             }
//             startFetching()
//         },)
//     }
//     function FetchToken(form){
//         const url = "http://localhost:3001/api/v1/user/login"
//         useEffect(()=>{
//             const startFetching = async () => {
//                 try {
//                     const response = await fetch(new Request(url, {
//                             method : "POST",
//                             headers : {
//                                 "content-type" : "application/json",
//                                 "accept" : "application/json"
//                             },
//                             body : JSON.stringify({...form})
//                         }))
//                     const res = await response.json()
//                     const token = res.body
//                     dispatch(createToken({...user, ...token}))
//                     navigate('/profile', {replace: true})
//                 } catch (error) {
//                     console.log("Erreur dans fetchToken : ", error)
//                     navigate('/', {replace: true})
//                 }
//             }
//             startFetching()
//         },[form, url])
//     }
//     return {FetchAuth, FetchToken}

// }