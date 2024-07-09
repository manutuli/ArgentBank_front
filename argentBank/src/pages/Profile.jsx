import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser, login } from "../redux/features/authentication/authSlice"
import { EditNameForm } from "../components/EditNameForm"
// 
export function Profile(){
    const [isHidden, setHidden] = useState(true)
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authentication.value)
    const controller = new AbortController()
    const signal = controller.signal
    const url = "http://localhost:3001/api/v1/user/profile"
    const request = new Request(url, {
        method  : 'POST',
        headers : {
            "accept" : "application/json",
            "Authorization" : "Bearer " + user.token
        },
        signal: signal,
    })
    const fetchProfile = async () => {
        try {
            if (user.data) return ()=> controller.abort()
            const response = await fetch(request)
            const res = await response.json()
            const data = {...res.body}
            dispatch(login({...user, isLogged : true}))
            dispatch(createUser({...user, data : data}))
        } catch (error) {
            console.log("Erreur dans fetchProfile : ", error)
        }
    }
    fetchProfile()
    console.log("profile : ", user)
    // function handleBtnEditName(e){
    //     e.preventDefault()
    //     e.target.
    // }
    return ( 
        <>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user.data?.firstName}</h1>
                    {/* <h1>Welcome back<br />{data.firstName ? data.firstName : "Jarvis!"}</h1> */}
                    <button onClick={() => {isHidden ? setHidden(false) : setHidden(true)}} className="edit-button">Edit Name</button>
                    {/* {console.log("profile : ", user)}  */}
                </div>
                {isHidden ? <EditNameForm /> : <span>-__-</span>}
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </>
    )
}