import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import UserKit from '../data/UserKit'
import {DivCenterColumn, H2, Input, Button, LoginButton} from "../components/styles"

export default function LoginPage() {

    const [loginEmail, setLoginEmail] = useState("frida.johansson888+1@gmail.com")
    const [loginPassword, setLoginPassword] = useState("js-fend-19")
    
    const userKit = new UserKit()
    const history = useHistory()
    // const searchString = history.location.search
    // const urlParameters = new URLSearchParams(searchString)

    // const [uid, setUid] = useState(urlParameters.get("uid"))
    // const [token, setToken] = useState(urlParameters.get("token"))

    // function handleActivateUser() {
    //     userKit.activateUser(uid, token)
    //     .then(() => {
    //     setUid(null)
    //     setToken(null)
    //       history.push("/login");
    //     })
    // }

    function handleLogin () {
        userKit.login(loginEmail, loginPassword)
        .then(res => res.json())
        .then(data => {
          userKit.setToken(data.token)
          history.push("/home")
        })
        
      }

    return (
        <DivCenterColumn>
            <H2>Login</H2>
            <Input placeholder="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
            <Input type="password" placeholder="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </DivCenterColumn>
    )
}
