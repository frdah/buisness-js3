import React, {useState, useEffect, useContext} from 'react'
import UserKit from '../data/UserKit'
import {CustomerLI, DivCenterColumn, H4} from "../components/styles"
import {UserContext} from "../contexts/UserContext"
import { CustomerUL } from '../components/styles'

export default function ProfilePage() {
    const userKit = new UserKit()
    const {userInfo, setUserInfo} = useContext(UserContext)

    function getUserInfo() {
        userKit.getUserInfo()
        .then(res => res.json())
        .then(data => {
            setUserInfo(data)    
        })
    }
    if (userInfo === null) {
        getUserInfo()
    }

    return(
        <DivCenterColumn marginTop>
            <CustomerUL>
                <CustomerLI><H4>{userInfo.firstName} {userInfo.lastName}</H4></CustomerLI>
                <CustomerLI>Email: {userInfo.email}</CustomerLI>
                <CustomerLI>Organisation name:{userInfo.organisationName}</CustomerLI>
                <CustomerLI>Organisation kind: {userInfo.organisationKind}</CustomerLI>
            </CustomerUL>
        </DivCenterColumn>
    )

}