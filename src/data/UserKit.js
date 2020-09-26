const ROOT_URL = "https://frebi.willandskill.eu/"
export default class {
    async register(firstName, lastName, email, password, organisationName, organisationKind){
        const url  = `${ROOT_URL}auth/users/`
        const payload = {
            firstName, lastName, email, password, organisationName, organisationKind
        }
        fetch(url, {
            method: "POST",
            headers: this.getPuplicHeaders(),
            body: JSON.stringify(payload)
        })
    }

    async activateUser(uid, token){
        const url = `${ROOT_URL}auth/users/activate/`
        const payload = {uid, token}
        
        return  fetch(url, { //borde få 204 tillbaka utan respons
                method: "POST",
                headers: this.getPuplicHeaders(),
                body: JSON.stringify(payload)
            })
        
    }

    async login(email, password) {
        const url = `${ROOT_URL}api-token-auth/`
        const payload = {email, password}
        return fetch(url, {
            method: "POST",
            headers: this.getPuplicHeaders(),
            body: JSON.stringify(payload)
        })
    }

    async getUserInfo() {
        const url= `${ROOT_URL}api/v1/me`
        return fetch(url, {
            headers: this.getPrivateHeaders()
        }) 
    }

    async getCustomerList() {
        const url= `${ROOT_URL}api/v1/customers`
        return fetch(url, {
            headers: this.getPrivateHeaders()
        })
        
    }

    async getCustomerDetail(id) {
        const url= `${ROOT_URL}api/v1/customers/${id}/`
        return fetch(url, {
            headers: this.getPrivateHeaders()
        })
    }

    createCustomer(payload) {
       const url = `${ROOT_URL}api/v1/customers`
        return fetch(url, { //tog bort return innan
            method: "POST",
            headers: this.getPrivateHeaders(),
            body: JSON.stringify(payload) 
        })
    }

    updateCustomer(payload, id) {
        const url = `${ROOT_URL}api/v1/customers/${id}/`
        return fetch(url, {
            method: "PUT",
            headers: this.getPrivateHeaders(),
            body: JSON.stringify(payload)
        })
    }

    async deleteCustomer(id) {
        const url = `${ROOT_URL}api/v1/customers/${id}/`
        return fetch(url, {
            method: "DELETE",
            headers: this.getPrivateHeaders()
        })
    }

    getPuplicHeaders() {
        return {
            "Content-Type": "application/json"
        }
 
    }

    getPrivateHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.getToken()}`
        }
 
    }

    setToken(token) {
        localStorage.setItem("BUISINESS_TOKEN", token)
    }

    getToken() {
        return localStorage.getItem("BUISINESS_TOKEN")
    }
    
}