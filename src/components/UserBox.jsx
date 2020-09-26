import React, {useState, useEffect} from 'react'
import UserKit from '../data/UserKit'
import {CustomerLI, DivCenterColumn, H4} from "./styles"

export default function UserBox() {
    const userKit = new UserKit()
    const [userInfo, setUserInfo] = useState("")

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
        <DivCenterColumn>
            <H4>Logged in as:</H4>
            <CustomerLI>{userInfo.firstName} {userInfo.lastName}</CustomerLI>
            <CustomerLI>{userInfo.email}</CustomerLI>
        </DivCenterColumn>
    )
}
