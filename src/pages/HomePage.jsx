import React, {useEffect, useState, useContext} from 'react'
import {Link} from "react-router-dom"
import UserKit from '../data/UserKit'
import {H2, DivCenterColumn, CustomerLI, CustomerUL, ShowCreateDiv, DivCustomerGrid} from "../components/styles"
import {CustomerContext} from "../contexts/CustomerContext"
import CustomerForm from '../components/CustomerForm'

export default function HomePage() {
  const userKit = new UserKit()

  const [showCreateDiv, setShowCreateDiv] = useState(false)
  const {customers, setCustomers} = useContext(CustomerContext)

    useEffect(() => {
        fetchCustomerList()
    }, [])

    function fetchCustomerList() {
        userKit.getCustomerList() 
        .then(res => res.json())
        .then(data => setCustomers(data.results))
    }

    function handleShowCreateDiv() {
        showCreateDiv === false ? setShowCreateDiv(true) : setShowCreateDiv(false);
    }

    function renderCustomerList(){
        return(
            <DivCenterColumn>
            <DivCustomerGrid>
            {customers && customers.map((customer, index) => {
                
                return <CustomerUL key={customer.id}>
                    
                    <CustomerLI><Link to={`/customers/${customer.id}`}>{customer.name}</Link></CustomerLI>
                    <CustomerLI>{customer.organisationNr}</CustomerLI>
                    <CustomerLI>{customer.reference}</CustomerLI>
                    
                    </CustomerUL>
            })
            }
            </DivCustomerGrid>
        </DivCenterColumn>
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
                <CustomerForm fetchCustomerList={fetchCustomerList} setShowCreateDiv= {setShowCreateDiv}/>
            : ""
            }
            {renderCustomerList()}
        </DivCenterColumn>
        </CustomerContext.Provider>

    )
}
