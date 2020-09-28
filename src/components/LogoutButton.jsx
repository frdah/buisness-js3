import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavButton} from "./styles"


export default function LogoutButton() {
    const history = useHistory()
    function logout() {
        localStorage.clear()
        history.push("/login")
    }
    return (
        
        <NavButton onClick={logout}>Logout</NavButton>
        
    )
}
