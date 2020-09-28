import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavButton} from "./styles"


export default function LoginButton() {
    const history = useHistory()

    return (
        <div>
            <NavButton onClick={() => {history.push("/login")}}>Login</NavButton>
        </div>
    )
}
