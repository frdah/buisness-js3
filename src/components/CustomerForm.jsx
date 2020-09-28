import React, {useState} from 'react'
import UserKit from '../data/UserKit'
import {CreateCustomerDiv, H4, CreateCustomerInput, CreateCustomerButton, P, DivCenterColumn} from "./styles"
import {validateCustomerInputs} from "./validation"

export default function CustomerForm({fetchCustomerList, setShowCreateDiv}) {

    const userKit = new UserKit()
    const [name , setName] = useState("")
    const [organisationNr , setOrganisationNr] = useState("")
    const [vatNr , setVatNr] = useState("")
    const [reference , setReference] = useState("")
    const [paymentTerm , setPaymentTerm] = useState("")
    const [website , setWebsite] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [email	, setEmail] = useState("")

    const [showError, setShowError] = useState(null)

    const inputArr = [
        ["name", name, setName, "text"],
        ["organisationNr", organisationNr, setOrganisationNr, "text"],
        ["vatNr", vatNr, setVatNr, "text"],
        ["reference", reference, setReference, "text"],
        ["paymentTerm", paymentTerm, setPaymentTerm, "text"],
        ["website", website, setWebsite, "text"],
        ["phoneNumber", phoneNumber, setPhoneNumber, "text"],
        ["email", email, setEmail, "email"] 
        ]

    function renderInput(key, placeholder, value, setValue, type) {
        return (
            <div key={key}>
                <CreateCustomerInput type={type} placeholder={placeholder} value={value} onChange ={(e => {setValue(e.target.value)})}/>
            </div>
        )
    }

    function addCustomer() { 
        if(validateCustomerInputs(vatNr, setShowError, paymentTerm, name, reference, organisationNr)){

            const payload = {
                name: name,
                organisationNr: organisationNr,
                vatNr: vatNr,
                reference: reference,
                paymentTerm: paymentTerm,
                website: website,
                phoneNumber: phoneNumber,
                email: email
            }
            userKit.createCustomer(payload)
            .then(fetchCustomerList)            
        }
 
    }

    return (
        <div>
            <DivCenterColumn white>
            
                    <H4>Create Customer</H4>
                    <CreateCustomerDiv>
                    {inputArr.map((inputItem, index) => {
                        return renderInput(index, inputItem[0], inputItem[1], inputItem[2], inputItem[3])
                    })}
                    </CreateCustomerDiv>
                    {showError && <P warning>{showError}</P>}
                    <CreateCustomerButton onClick={addCustomer}>Create Customer</CreateCustomerButton>
                
                </DivCenterColumn>
        </div>
    )
}
