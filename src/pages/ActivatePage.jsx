import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserKit from '../data/UserKit'
import LoginPage from './LoginPage'
import  {DivCenterColumn, H4, BigButton} from "../components/styles"

export default function ActivatePage() {

    const userKit = new UserKit()
    const history = useHistory()
    const searchString = history.location.search
    const urlParameters = new URLSearchParams(searchString)

    const [uid, setUid] = useState(urlParameters.get("uid"))
    const [token, setToken] = useState(urlParameters.get("token"))

    function handleActivateUser() {
        userKit.activateUser(uid, token)
        .then(() => {
        setUid(null)
        setToken(null)
          history.push("/login");
        })
    }

    return (
        <DivCenterColumn>
        {token ? (
            <DivCenterColumn marginTop>
            <H4>Activate Account</H4>
            <BigButton onClick={handleActivateUser}>Activate user</BigButton>
            </DivCenterColumn>
          ) : (
          <LoginPage/>
          )}
          </DivCenterColumn>
    )
}
