import React from 'react'
import {useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserKit from '../data/UserKit'
import { CustomerLI, DivCenterColumn, Button, H4 } from '../components/styles'
import {CustomerContext} from "../contexts/CustomerContext"

export default function CustomerDetail(props) {
    const history = useHistory()
    const userKit = new UserKit()
    const {customers, setCustomers} = useContext(CustomerContext)
    const customerId = props.match.params.id

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

    function handleDeleteCustomer() {
        userKit.deleteCustomer(customerId)
        .then(getCustomerList())
        .then(history.push("/home"))
    }

    return (
        customers && customers.map((customer, index) => {
            if (parseInt(customer.id) === parseInt(customerId)) {
                return (
                    
                    <DivCenterColumn key={index}>
                        <CustomerLI><H4 white>{customer.name}</H4></CustomerLI>
                        <CustomerLI>Organisation number: {customer.organisationNr}</CustomerLI>
                        <CustomerLI>Vat number: {customer.vatNr}</CustomerLI>
                        <CustomerLI>Reference: {customer.reference}</CustomerLI>
                        <CustomerLI>Payement term: {customer.paymentTerm}</CustomerLI>
                        <CustomerLI>Website: {customer.website}</CustomerLI>
                        <CustomerLI>Phone number: {customer.phoneNumber}</CustomerLI>
                        <CustomerLI>Email: {customer.email}</CustomerLI>
                        <Button onClick={handleDeleteCustomer}>Delete customer</Button>
                    </DivCenterColumn>
                )
            }  
        })   
    )
}
