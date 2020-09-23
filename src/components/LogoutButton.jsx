import React from 'react'
import { useHistory } from 'react-router-dom'
import {CreateCustomerButton} from "./styles"


export default function LogoutButton() {
    const history = useHistory()
    function logout() {
        localStorage.clear()
        history.push("/login")
    }
    return (
        
        <CreateCustomerButton onClick={logout}>Logout</CreateCustomerButton>
        
    )
}
