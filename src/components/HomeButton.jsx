import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavButton} from "./styles"


export default function HomeButton() {
    const history = useHistory()

    return (
        <div>
            <NavButton onClick={() => {history.push("/home")}}>Home</NavButton>
        </div>
    )
}