import React, {useEffect, useState, useContext, createContext} from 'react'
import {Link} from "react-router-dom"
import UserKit from '../data/UserKit'
import {P,H2, H4, DivCenterColumn, Input, Button, CustomerLI, CustomerUL, CreateCustomerDiv, CreateCustomerButton, CreateCustomerInput, ShowCreateDiv} from "../components/styles"
import {CustomerContext} from "../contexts/CustomerContext"

export default function HomePage() {
  const userKit = new UserKit()
  //const [customers , setCustomers] = useState([])
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

// useEffect(() => {
//     console.log(customers)
// }, [customers])


    function renderInput(key, placeholder, value, setValue, type) {
        return (
            <div key={key}>
                <CreateCustomerInput type={type} placeholder={placeholder} value={value} onChange ={(e => {setValue(e.target.value)})}/>
            </div>
        )
    }

    //const tillf = [1, 5, 6 ,3]
    function fetchCustomerList() {
        userKit.getCustomerList() //körs innan det postats en ny??
        .then(res => res.json())
        .then(data => setCustomers(data.results))
          //console.log(data.results, "fetch data.results")
          
        //.then(console.log(customers))
        //.then(renderCustomerList())
    }

    function addCustomer() { 
        let vatNrNumbersString = vatNr.slice(2,12)
        if (vatNr.startsWith("SE") && vatNr.length === 12 && /^\d+$/.test(vatNrNumbersString)) {
            setShowError(false)

            const payload = {
                name: name,
                organisationNr: organisationNr,
                vatNr: vatNr,
                reference: reference,
                website: website,
                phoneNumber: phoneNumber,
                email: email
            }
            console.log(payload)
            userKit.createCustomer(payload)
            .then(fetchCustomerList)
           // .then(console.log(customers)) //denna får ej den senaste
            
            
            // .then(inputArr.map(item => {
            //     item[2]("")
            // }))
            //.then(renderCustomerList()) gör ingen skillnad
        
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
                //console.log(customers)
                return <CustomerLI key={index}><Link to={`/customers/${customer.id}`}>{customer.name}</Link></CustomerLI>
            })
            }
        </CustomerUL>
        )
    }
    

    return (
        <CustomerContext.Provider value={{customers, setCustomers}}>
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
            
            {/* <CustomerUL>
                <H4>Customer List</H4>
                {customers && customers.map((customer, index) => {
                    console.log(customer.name)
                    return (<Link key={index} to={`/customers/${customer.id}`}>{customer.name}</Link>)
                })
                }
            </CustomerUL> */}
            {/* <button onClick={getCustomerList}>get custumers</button> */}
           

        </DivCenterColumn>
        </CustomerContext.Provider>

    )
}
