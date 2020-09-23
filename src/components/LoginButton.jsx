import React from 'react'
import { useHistory } from 'react-router-dom'
import {NavDiv, CreateCustomerButton} from "./styles"


export default function LoginButton() {
    const history = useHistory()

    return (
        <div>
            <CreateCustomerButton onClick={() => {history.push("/login")}}>Login</CreateCustomerButton>
        </div>
    )
}
