import React from 'react'
import styled from "styled-components"



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


`
export const Input =  styled.input `
border: none;
border-bottom: 1px grey solid;
padding: 1%;
margin: 20px;
text-align: center;
font-size: 16px;
`

export const Button = styled.button `
border: none;
padding: 5px 15px ;
margin-top: 3%;
border-radius: 10px;
color: white;
background-color: rgb(117, 164, 240);
cursor: pointer;
`

export const NavDiv = styled(DivCenterColumn) `
flex-direction: row;
justify-content: space-evenly;
background-color: rgb(117, 164, 240);;

`

export const DivCenterRow = styled(DivCenterColumn) `
flex-direction: row;
width: 200px;
justify-content: space-between;
`

/*****************************HOME****************************** */

export const CustomerLI =  styled.li `
margin: 5px;
border-bottom: 1px grey solid;
padding: 5px;
list-style-type: none;
font-size: 20px;
color: grey;
font-family: Arial, Helvetica, sans-serif;

`

export const CustomerUL =  styled.ul `
margin: 10px;
padding: 0px;
`
export const ShowCreateDiv = styled.div `
background-color: rgb(117, 164, 240);
font-size: 40px;
font-weight: bolder;
border-radius: 50px;
width: 50px;
height: 50px;
color: white;
`

export const CreateCustomerDiv = styled(DivCenterColumn) `
background-color: rgb(117, 164, 240);
padding: 10px;
border-radius: 10px;
margin-top: 10px;

`

export const H4 = styled.h4 `
margin: 5px;
color: grey;
font-size: 20px;
border-bottom: 1px solid grey;
font-family: Arial, Helvetica, sans-serif;


`//margin-top för activate user ivärstfall ta bort.
export const CreateCustomerInput = styled(Input) `
background-color: light-grey;
border-radius: 10px;
margin: 10px;
`

export const CreateCustomerButton = styled(Button) `
background-color: white;
color: grey;
margin: 0px;
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