import React, { Children } from 'react'
import UserKit from '../data/UserKit'
import LoginPage from '../pages/LoginPage'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import HomeButton from "./HomeButton"
import {H1, NavDiv, CreateCustomerButton, DivCenterRow} from "../components/styles"
import { useHistory } from 'react-router-dom'


export default function Navigation({children}) {
const userKit = new UserKit()
const history = useHistory()

function pushRegister () {
    history.push("/")
}

    return (
        <div>
        <NavDiv>
            <H1>Business Project</H1>
            <DivCenterRow>

            {userKit.getToken() == null ? <LoginButton/> : <LogoutButton/>
            }
            <CreateCustomerButton onClick={pushRegister}>Register</CreateCustomerButton>
            <HomeButton/>
            
            
            </DivCenterRow>


        </NavDiv>
        {children}
        </div>
    )
}
