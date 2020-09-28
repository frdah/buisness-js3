import React from 'react'
import styled from "styled-components"


export const MainDiv = styled.div `
background-color: rgb(240, 241, 245);
height: 100vh;
`
export const H1 = styled.h1 `
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`

export const H2 = styled.h2 `
font-size: 20px;
color: grey;
font-size: 35px;
font-family: Arial, Helvetica, sans-serif;

`

export const DivCenterColumn = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;
text-align: center;
border-radius: 10px;
padding: 5px;
margin-bottom: 10px;
background: ${props => props.white ? "white" : ""};
margin-top: ${props => props.marginTop ? "100px" : "0px"}


`
export const Input =  styled.input `
border: none;
border-bottom: 1px grey solid;
padding: 1%;
margin: 20px;
text-align: center;
font-size: 16px;
border-radius: 10px;
color:#8ab7ff;
&:focus{
    outline: none;
`

export const Button = styled.button `
border: none;
padding: 5px 15px ;
margin-top: 3%;
border-radius: 10px;
color: white;
background-color: rgb(117, 164, 240);
cursor: pointer;
&:hover{
    background-color: #8ab7ff;
    color: white;
`

export const NavDiv = styled(DivCenterColumn) `
flex-direction: row;
justify-content: space-evenly;
background: rgb(72,131,226);
background: linear-gradient(90deg, rgba(138,183,255,1) 0%, rgba(90,90,232,1) 34%, rgba(40,171,141,1) 100%);
border-radius: 0px;

`


export const DivCenterRow = styled(DivCenterColumn) `
flex-direction: row;
width: 200px;
justify-content: space-between;
margin-left: 12%;
`
export const UserDiv = styled(DivCenterColumn) `
background-color: white;
font-size: 15px;
padding: 10px;
border-radius: 10px;
margin-right: 20px;
margin-left: -20px;
&:hover{
    background-color: #8ab7ff;
    color: white;
`

export const NavButton = styled(Button) `
background-color: white;
color: #8ab7ff;
margin: 3%;
`

export const UserLI = styled.li `
font-family: Arial, Helvetica, sans-serif;
font-size: 13px;
list-style-type: none;
`

export const A = styled.a `
text-decoration: none;
`

/*****************************HOME****************************** */

export const CustomerLI =  styled.li `
margin: 5px;

padding: 5px;
list-style-type: none;
font-size: 15px;
color: white;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid #5a5ae8;


`

export const CustomerUL =  styled.ul `
margin: 10px;
padding: 15px;
display: grid;
background: #8ab7ff;
grid-template-columns: 3fr, 3fr, 3fr;
border-radius: 10px;
`


export const DivCustomerGrid = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background: white;
border-radius: 10px;
padding: 10px;

`
export const ShowCreateDiv = styled.div `
background-color: #5a5ae8;
font-size: 40px;
font-weight: bolder;
border-radius: 50px;
width: 50px;
height: 50px;
color: white;
cursor: pointer;
margin-bottom: 20px;
&:hover{
    background: radial-gradient(circle, rgba(90,90,232,1) 0%, rgba(40,171,141,1) 100%);
    
    

`

export const CreateCustomerDiv = styled(DivCenterColumn) `
display: grid;
grid-template-columns: 1fr 1fr;
background-color: white;
padding: 10px;
border-radius: 10px;
margin: 10px;

`

export const H4 = styled.h4 `
margin: 5px;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
color: ${props => props.white ? "white" : "#5a5ae8;"};
`

export const CreateCustomerInput = styled(Input) `
background-color: light-grey;
margin: 10px;
color: #5a5ae8;
border-radius: 0px;
&:focus{
    outline: none;
`

export const CreateCustomerButton = styled(Button) `
background: radial-gradient(circle, rgba(90,90,232,1) 0%, rgba(40,171,141,1) 100%);
color: white;
margin: 0px;
&:hover{
    background: radial-gradient(circle, rgba(40,171,141,1) 0%, rgba(90,90,232,1) 100%);

`

/****************************LOGIN************************ */

export const LoginButton = styled(Button) `

width: 100px;
`

/***********************Activate user******************* */

export const BigButton = styled(Button) `
width: 150px;
font-size: 20px;
margin-top: 30px;

&:hover{
background-color: rgb(151, 219, 182);

}
`

export const P = styled.p `
font-size: 15px;
color: ${props => props.warning ? "red" : "black"};
font-family: Arial, Helvetica, sans-serif;
`

