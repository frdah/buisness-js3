import React, {useState} from 'react'
import UserKit from '../data/UserKit'
import {H2, DivCenterColumn, CreateCustomerInput, Button, P} from "../components/styles"
import  {validateRegisterInputs} from "../components/validation"


export default function RegisterPage() {

    const userKit = new UserKit();

    const [showError, setShowError] = useState(null)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [organisationName, setOrganisationName] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")
    const [registerd, setRegisterd] = useState(null)


    function register () {
        if (validateRegisterInputs(setShowError, email, password, organisationKind)) {
        userKit.register(
            firstName, 
            lastName, 
            email, 
            password, 
            organisationName, 
            organisationKind
        ).then(setRegisterd(true))
         setShowError(null)
        }
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
                <CreateCustomerInput type={type} placeholder={placeholder} value={value} onChange ={(e => {setValue(e.target.value)})}/>
            </div>
        )
        
    }

    return (
        
        <DivCenterColumn marginTop white>
            <H2>Register Page</H2>
            <P>Enter details to register</P>
            {inputArr.map((inputItem, index) => {
                return renderInput(index, inputItem[0], inputItem[1], inputItem[2], inputItem[3])
            })}
            {registerd && <P>A link has been sent to your email</P>}
            {showError && <P warning>{showError}</P>}

            <Button onClick={register}>Register</Button>

        </DivCenterColumn>
    )
}
