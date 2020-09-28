import React, { useEffect, useContext} from 'react'
//import {Link} from "react-router-dom"
import UserKit from '../data/UserKit'
import { UserDiv, UserLI, A} from "./styles"
import {UserContext} from "../contexts/UserContext"

export default function UserBox() {
    const userKit = new UserKit()
    const {userInfo, setUserInfo} = useContext(UserContext)

    function getUserInfo() {
        userKit.getUserInfo()
        .then(res => res.json())
        .then(data => {
            setUserInfo(data)
        })
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        // <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName, email, setEmail}}>
        <A href="/profile">
        <UserDiv>
            <UserLI>{userInfo.firstName} {userInfo.lastName}</UserLI>
            <UserLI>{userInfo.email}</UserLI>
        </UserDiv>
        </A>
        // </UserContext.Provider>
    )
}
