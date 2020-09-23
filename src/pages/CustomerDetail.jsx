import React, {useContext, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import UserKit from '../data/UserKit'
import { CustomerLI, DivCenterColumn, Button } from '../components/styles'
import {CustomerContext} from "../contexts/CustomerContext"

export default function CustomerDetail(props) {
    const history = useHistory()
    const {customers, setCustomers} = useContext(CustomerContext)
    const userKit = new UserKit()
    const customerId = props.match.params.id

    useEffect(() => {
        renderCustomer()
    }, [customers])

    function getCustomerList() {
        userKit.getCustomerList()
        .then(res => res.json())
        .then(data => {
          setCustomers(data.results)
        })
    }

    if (customers === null) {
        console.log(customers)
        getCustomerList()
    }
    else(renderCustomer())

    function handleDeleteCustomer() {
        console.log("clicked")
        userKit.deleteCustomer(customerId)
        .then(getCustomerList())
        .then(history.push("/home"))
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
                            <CustomerLI>{customer.website}</CustomerLI>
                            <CustomerLI>{customer.phoneNumber}</CustomerLI>
                            <Button onClick={handleDeleteCustomer}>Delete customer</Button>
                        </DivCenterColumn>
                    )
                }  
            })   
        )
        
        // else {
        //     return (
        //         <DivCenterColumn>This Customer does not exist</DivCenterColumn>
        //     )
        // }
    }

    return (
        <DivCenterColumn>
            {renderCustomer()}
        </DivCenterColumn>
    )
}
/*{customer.name} | {customer.organisationNr} |
                            {customer.vatNr} | {customer.reference}|
                            {customer.website} | {customer.phoneNumber}| 
                            {customer.email}*/
