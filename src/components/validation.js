import React from "react"

export function validateCustomerInputs (vatNr, setShowError, paymentTerm,name, reference, organisationNr) {
    if (name ==="") {return setShowError("Enter name") }

    if (organisationNr ==="") {return setShowError("Enter organisationNr")}

    if (reference ==="") {return setShowError("Enter reference")}
    
    if (vatNr ===""  || vatNr.length !== 12 || 
        vatNr.startsWith("SE") === false ||  
        /^\d+$/.test(vatNr.slice(2,12)) === false) {
        
            return setShowError("Wrong vatNr. Ex. SE1234567890")
    }

    if (paymentTerm ==="" || /^\d+$/.test(paymentTerm) ===false) {
        
        return setShowError("Payment term has to be a number")
    }

    return true;
    
}


export function validateRegisterInputs (setShowError, email, password, organisationKind) {

    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email ==="" || emailValidation.test(email) === false) {return setShowError("Enter valid email")}

    if (password ==="" || password.length < 8 || /[a-zA-z-]/.test(password) === false || /\d/.test(password)=== false) {
        return setShowError("Password should consist of letters and numbers and be at least 8 characters")}
    
    if (organisationKind ==="" || /[0-2]/.test(organisationKind)=== false) {return setShowError("Enter organisation kind (0-2)")}

    return true;
    
}

