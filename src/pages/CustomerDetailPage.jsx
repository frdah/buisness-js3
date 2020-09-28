import React, {useState} from 'react'
import { DivCenterColumn, Button, CustomerUL } from '../components/styles'
import CustomerDetail from "../components/CustomerDetail"
import EditCutomerDetail from '../components/EditCutomerDetail'

export default function CustomerDetailPage(props) {
    const [editCustomer, setEditCustomer] = useState(false)

    return (
        <DivCenterColumn marginTop>
            <CustomerUL>
            {editCustomer === true ? <EditCutomerDetail {...props} setEditCustomer={setEditCustomer}/> : <CustomerDetail {...props}/> }
            {editCustomer === false ? <Button onClick={() => {setEditCustomer(true)}}>Edit customer</Button> : ""}
            </CustomerUL>
        </DivCenterColumn>
    )
}

