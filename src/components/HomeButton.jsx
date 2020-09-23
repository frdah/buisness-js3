import React from 'react'
import { useHistory } from 'react-router-dom'
import {NavDiv, CreateCustomerButton} from "./styles"


export default function HomeButton() {
    const history = useHistory()

    return (
        <div>
            <CreateCustomerButton onClick={() => {history.push("/home")}}>Home</CreateCustomerButton>
        </div>
    )
}