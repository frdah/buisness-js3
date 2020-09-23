import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
import UserKit from '../data/UserKit'
import {H2, DivCenterColumn, Input, Button, P} from "../components/styles"


export default function RegisterPage() {

    const userKit = new UserKit();
    const history = useHistory()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [organisationName, setOrganisationName] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")
    const [registerd, setRegisterd] = useState(null)


    function register () {
        userKit.register(
            firstName, 
            lastName, 
            email, 
            password, 
            organisationName, 
            organisationKind
        ).then(setRegisterd(true))
        
 
    }

    const inputArr = [
        ["First Name", firstName, setFirstName, "text"],
        ["Last Name", lastName, setLastName, "text"],
        ["Email", email, setEmail, "email"],
        ["Password", password, setPassword, "password"],
        ["Organisation Name", organisationName, setOrganisationName, "text"],
        ["Organisation Kind", organisationKind, setOrganisationKind, "number"], 
    ]

    function renderInput(key, placeholder, value, setValue, type) {
        return (
            <div key={key}>
                <Input type={type} placeholder={placeholder} value={value} onChange ={(e => {setValue(e.target.value)})}/>
            </div>
        )
        
    }


    return (
        <div>
        
        <DivCenterColumn>
            <H2>Register Page</H2>
            <p>Enter details to register</p>
            {inputArr.map((inputItem, index) => {
                return renderInput(index, inputItem[0], inputItem[1], inputItem[2], inputItem[3])
            })}
            {registerd && <P warning>A link has been sent to your email</P>}
            <Button onClick={register}>Register</Button>

        </DivCenterColumn>

        </div>
    )
}
