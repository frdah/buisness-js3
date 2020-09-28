import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import UserKit from '../data/UserKit'
import {DivCenterColumn, H2, LoginButton, CreateCustomerInput, NavButton, P} from "../components/styles"

export default function LoginPage() {

    const [loginEmail, setLoginEmail] = useState("frida.johansson888+1@gmail.com")
    const [loginPassword, setLoginPassword] = useState("js-fend-19")
    const [showError, setShowError] = useState(null)
    
    const userKit = new UserKit()
    const history = useHistory()

    function handleLogin () {
        userKit.login(loginEmail, loginPassword)
        .then(res => res.json())
        .then(data => {
            if (data.token === undefined) {return setShowError("Wrong input, please try again")}
          userKit.setToken(data.token)
          history.push("/home")
        }) 
        
    }

    function handlePushRegister() {history.push("/")}

    return (
        <DivCenterColumn marginTop white>
            <H2>Login</H2>
            <CreateCustomerInput placeholder="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
            <CreateCustomerInput type="password" placeholder="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
            {showError && <P warning>{showError}</P>}
            <LoginButton onClick={handleLogin}>Login</LoginButton>
            <NavButton onClick={handlePushRegister}>Register</NavButton>
        </DivCenterColumn>
    )
}
