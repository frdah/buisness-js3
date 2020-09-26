import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from "react-router-dom"
import UserKit from '../data/UserKit'
import { CustomerLI, DivCenterColumn, Button, Input } from '../components/styles'
import {CustomerContext} from "../contexts/CustomerContext"

export default function CustomerDetailPage(props) {
    const history = useHistory()
    const {customers, setCustomers} = useContext(CustomerContext)
    const userKit = new UserKit()
    const customerId = props.match.params.id
    const [editCustomer, setEditCustomer] = useState(false)
    //const [currentCustomer, setCurrentCustomer] = useState({})
    const [showError, setShowError] = useState(null)

    useEffect(() => {
        renderCustomer()
        setEditCustomer(false)
        setfunction()
    }, [customers])

    const [name , setName] = useState("")
    const [organisationNr , setOrganisationNr] = useState("")
    const [vatNr , setVatNr] = useState("")
    const [reference , setReference] = useState("")
    const [paymentTerm , setPaymentTerm] = useState("")
    const [website , setWebsite] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [email	, setEmail] = useState("")

    function getCustomerList() {
        userKit.getCustomerList()
        .then(res => res.json())
        .then(data => {
          setCustomers(data.results)
        })
    }

    if (customers === null) {
        getCustomerList()
    }
    else(renderCustomer())

    function handleDeleteCustomer() {
        userKit.deleteCustomer(customerId)
        .then(getCustomerList())
        .then(history.push("/home"))
    }

    function handleEditCustomer() {
        setEditCustomer(true)
    }

    function handleUpdateCustomer() {
        if (vatNr !== null && 
            vatNr.length === 12 && 
            vatNr.startsWith("SE") &&  
            /^\d+$/.test(vatNr.slice(2,12)) &&  //gör till en funktion som returnerar true eller false i en separat validation fil
            /^\d+$/.test(paymentTerm) ) {

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
            .then(renderCustomer)
            setEditCustomer(false)
            setShowError(false)
        }
        else {
            setShowError(true)
        }  
    }

    function renderCustomer() {
        return (
            customers && customers.map((customer, index) => {
                if (parseInt(customer.id) === parseInt(customerId)) {
                    return (
                        
                        <DivCenterColumn key={index}>
                            <CustomerLI>{customer.name}</CustomerLI>
                            <CustomerLI>{customer.organisationNr}</CustomerLI>
                            <CustomerLI>{customer.vatNr}</CustomerLI>
                            <CustomerLI>{customer.reference}</CustomerLI>
                            <CustomerLI>{customer.paymentTerm}</CustomerLI>
                            <CustomerLI>{customer.website}</CustomerLI>
                            <CustomerLI>{customer.phoneNumber}</CustomerLI>
                            <CustomerLI>{customer.email}</CustomerLI>
                            <Button onClick={handleDeleteCustomer}>Delete customer</Button>
                            <Button onClick={handleEditCustomer}>Edit customer</Button>
                        </DivCenterColumn>
                    )
                }  
            })   
        ) 
    }

     function setfunction() {
         if (customers === null) {
             return
         }

        customers.map((customer, index) => {
           if (parseInt(customer.id) === parseInt(customerId)) {
               console.log("i if i setfunc")
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

    function renderInputCustomer(){ //gör till inputs med value customer.name etc

        return (
            customers && customers.map((customer, index) => {
                if (parseInt(customer.id) === parseInt(customerId)) {
                    return (
                        <DivCenterColumn key={index}>
                            <Input type="text" defaultValue={name}  onChange ={(e => {setName(e.target.value)})} placeholder="name"/>
                            <Input type="text" defaultValue={organisationNr} onChange ={(e => {setOrganisationNr(e.target.value)})} placeholder="organisationNr" />
                            <Input type="text" defaultValue={vatNr} onChange ={(e => {setVatNr(e.target.value)})} placeholder="vatNr"/>
                            <Input type="text" defaultValue={reference} onChange ={(e => {setReference(e.target.value)})} placeholder="reference"/>
                            <Input type="text" defaultValue={paymentTerm} onChange ={(e => {setPaymentTerm(e.target.value)})} placeholder="paymentTerm"/>
                            <Input type="text" defaultValue={website} onChange ={(e => {setWebsite(e.target.value)})} placeholder="website"/>
                            <Input type="text" defaultValue={phoneNumber} onChange ={(e => {setPhoneNumber(e.target.value)})} placeholder="phoneNumber"/>
                            <Input type="text" defaultValue={email} onChange ={(e => {setEmail(e.target.value)})} placeholder="email"/>
                            <Button onClick={handleUpdateCustomer}>Update</Button>
                        </DivCenterColumn>
                    )
                }  
            })   
        )
    }

    return (
        <DivCenterColumn>
            {editCustomer === true ? renderInputCustomer() : renderCustomer()}
        </DivCenterColumn>
    )
}
/*{customer.name} | {customer.organisationNr} |
                            {customer.vatNr} | {customer.reference}|
                            {customer.website} | {customer.phoneNumber}| 
                            {customer.email}*/
