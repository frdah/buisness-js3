import React, {useState, useContext, useEffect} from 'react'
import {Input, DivCenterColumn, Button, P} from "./styles"
import {CustomerContext} from "../contexts/CustomerContext"
import UserKit from '../data/UserKit'
import {validateCustomerInputs} from "./validation"

export default function EditCutomerDetail(props) {
    const {customers, setCustomers} = useContext(CustomerContext)
    const userKit = new UserKit()
    const customerId = props.match.params.id
    const [name , setName] = useState("")
    const [organisationNr , setOrganisationNr] = useState("")
    const [vatNr , setVatNr] = useState("")
    const [reference , setReference] = useState("")
    const [paymentTerm , setPaymentTerm] = useState("")
    const [website , setWebsite] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [email	, setEmail] = useState("")
    
    const [showError, setShowError] = useState(null)

    useEffect(() => {getCustomer()}, [])

    function getCustomer() {
        customers.map(customer => {
            if (parseInt(customer.id) === parseInt(customerId)) {
                setName(customer.name)
                setOrganisationNr(customer.organisationNr)
                setVatNr(customer.vatNr)
                setReference(customer.reference)
                setPaymentTerm(customer.paymentTerm)
                setWebsite(customer.website)
                setPhoneNumber(customer.phoneNumber)
                setEmail(customer.email)   
            }
        })
    }

    function getCustomerList() {
        userKit.getCustomerList()
        .then(res => res.json())
        .then(data => {
          setCustomers(data.results)
        })
    }

    function handleUpdateCustomer() {
            if(validateCustomerInputs(vatNr, setShowError, paymentTerm, name, reference, organisationNr)) {

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
            userKit.updateCustomer(payload, customerId)
            .then(getCustomerList)
            setShowError(null)
            props.setEditCustomer(false)
        }  
    }

    return (       
            <DivCenterColumn>
                <Input type="text" defaultValue={name}  onChange ={(e => {setName(e.target.value)})} placeholder="name"/>
                <Input type="text" defaultValue={organisationNr} onChange ={(e => {setOrganisationNr(e.target.value)})} placeholder="organisationNr" />
                <Input type="text" defaultValue={vatNr} onChange ={(e => {setVatNr(e.target.value)})} placeholder="vatNr"/>
                <Input type="text" defaultValue={reference} onChange ={(e => {setReference(e.target.value)})} placeholder="reference"/>
                <Input type="text" defaultValue={paymentTerm} onChange ={(e => {setPaymentTerm(e.target.value)})} placeholder="paymentTerm"/>
                <Input type="text" defaultValue={website} onChange ={(e => {setWebsite(e.target.value)})} placeholder="website"/>
                <Input type="text" defaultValue={phoneNumber} onChange ={(e => {setPhoneNumber(e.target.value)})} placeholder="phoneNumber"/>
                <Input type="text" defaultValue={email} onChange ={(e => {setEmail(e.target.value)})} placeholder="email"/>
                <Button onClick={handleUpdateCustomer}>Update</Button>
                {showError && <P warning>{showError}</P>}
            </DivCenterColumn>
    )
}
