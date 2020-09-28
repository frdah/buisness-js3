import React, { Children } from 'react'
import UserKit from '../data/UserKit'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import HomeButton from "./HomeButton"
import {H1, NavDiv, DivCenterRow, DivCenterColumn} from "../components/styles"
import UserBox from './UserBox'


export default function Navigation({children}) {
const userKit = new UserKit()


    return (
        <div>
        <NavDiv>
            <H1>Business Project</H1>
            <DivCenterRow>
            {userKit.getToken() == null ? "" : <UserBox/>}

            <DivCenterColumn>
            {userKit.getToken() == null ? "" : <HomeButton/>}
            {userKit.getToken() == null ? <LoginButton/> : <LogoutButton/>
            }
            
            </DivCenterColumn>
            </DivCenterRow>

        </NavDiv>
        {children}
        </div>
    )
}
