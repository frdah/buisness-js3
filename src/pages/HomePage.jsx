import React, {useEffect, useState, useContext, createContext} from 'react'
import {Link} from "react-router-dom"
import UserKit from '../data/UserKit'
import {P,H2, H4, DivCenterColumn, Input, Button, CustomerLI, CustomerUL, CreateCustomerDiv, CreateCustomerButton, CreateCustomerInput, ShowCreateDiv} from "../components/styles"
import {CustomerContext} from "../contexts/CustomerContext"
import UserBox from '../components/UserBox'

export default function HomePage() {
  const userKit = new UserKit()
  const [name , setName] = useState("")
  const [organisationNr , setOrganisationNr] = useState("")
  const [vatNr , setVatNr] = useState("")
  const [reference , setReference] = useState("")
  const [paymentTerm , setPaymentTerm] = useState("")
  const [website , setWebsite] = useState("")
  const [phoneNumber , setPhoneNumber] = useState("")
  const [email	, setEmail] = useState("")
  
  const [showCreateDiv, setShowCreateDiv] = useState(false)
  const [showError, setShowError] = useState(null)
  const {customers, setCustomers} = useContext(CustomerContext)

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

    useEffect(() => {
        fetchCustomerList()
    }, [])

    function renderInput(key, placeholder, value, setValue, type) {
        return (
            <div key={key}>
                <CreateCustomerInput type={type} placeholder={placeholder} value={value} onChange ={(e => {setValue(e.target.value)})}/>
            </div>
        )
    }

    function fetchCustomerList() {
        userKit.getCustomerList() 
        .then(res => res.json())
        .then(data => setCustomers(data.results))

    }

    function addCustomer() { 
        //let vatNrNumbersString = vatNr.slice(2,12)
        if (vatNr.length === 12 && 
            vatNr.startsWith("SE") &&  
            /^\d+$/.test(vatNr.slice(2,12)) &&
            /^\d+$/.test(paymentTerm)) {
            setShowError(false)

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
        else {
            setShowError(true)
        }   
    }

    function handleShowCreateDiv() {
        showCreateDiv === false ? setShowCreateDiv(true) : setShowCreateDiv(false);
    }

    function renderCustomerList(){
        return(
            <CustomerUL>
            <H4>Customer List</H4>
            {customers && customers.map((customer, index) => {
                
                return <CustomerLI key={index}><Link to={`/customers/${customer.id}`}>{customer.name}</Link></CustomerLI>
            })
            }
        </CustomerUL>
        )
    }
    
    return (
        <CustomerContext.Provider value={{customers, setCustomers}}>
           <UserBox/> 
        <DivCenterColumn>
            <H2>Customers</H2>
            <ShowCreateDiv onClick={handleShowCreateDiv}>
            {showCreateDiv === true ? "𝙭" : "+"}
            </ShowCreateDiv>
            
            {showCreateDiv === true ?
                <CreateCustomerDiv>
                    <H4>Create Customer</H4>
                    {inputArr.map((inputItem, index) => {
                        return renderInput(index, inputItem[0], inputItem[1], inputItem[2], inputItem[3])
                    })}
                    {showError === true ? <P warning>VatNr is not valid. Ex SE3456788777</P> : ""}
                    <CreateCustomerButton onClick={addCustomer}>Create Customer</CreateCustomerButton>
                </CreateCustomerDiv>
            : ""
            }
            {renderCustomerList()}
        </DivCenterColumn>
        </CustomerContext.Provider>

    )
}
