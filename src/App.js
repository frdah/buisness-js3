import React, { useState } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { CustomerContext } from "./contexts/CustomerContext";
import Navigation from "./components/Navigation"
import UserKit from "./data/UserKit"
import ActivatePage from "./pages/ActivatePage"
import CustomerDetailPage from "./pages/CustomerDetailPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  const [customers, setCustomers] = useState(null);
  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [organisationName, setOrganisationName] = useState("")
  // const [organisationKind, setOrganisationKind] = useState("")
  // const [loginEmail, setLoginEmail] = useState("frida.johansson888+1@gmail.com")
  // const [loginPassword, setLoginPassword] = useState("js-fend-19")

  // const userKit = new UserKit()
  // const history = useHistory()
  // const searchString = history.location.search
  // const urlParameters = new URLSearchParams(searchString)

  // const [uid, setUid] = useState(urlParameters.get("uid"))
  // const [token, setToken] = useState(urlParameters.get("token"))

  //console.log(searchString)
 

  //console.log(token, "uid:", uid)

// function handleActivateUser() {
//   userKit.activateUser(uid, token)
//   .then(() => {
//   setUid(null)
//   setToken(null)
//     history.push("/login");
//   })
// }


//   function handleRegister() {
//     userKit.register(
//       firstName,
//       lastName,
//       email,
//       password,
//       organisationName,
//       organisationKind
//     )
//   }

//   function handleLogin () {
//     userKit.login(loginEmail, loginPassword)
//     .then(res => res.json())
//     .then(data => {
//       userKit.setToken(data.token)
//       history.push("/home")
//     })
    
//   }

  // function getCustomerList() {
  //   userKit.getCustomerList()
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  return (
    <div>
      <CustomerContext.Provider value={{customers, setCustomers}}>

      <Switch>

      <Route 
      path="/customers/:id" 
      render={(props) => {
        return (
          <Navigation>
            <CustomerDetailPage {...props}/>
          </Navigation>
          
        )
      }}></Route>

        <Route path="/home">
          <Navigation>
          <HomePage/>
          </Navigation>
          {/* <div>
          <h2>Home</h2>
          <button onClick={getCustomerList}>get cust</button>
          </div> */}
          
        </Route>
        
      <Route path="/login">
        <Navigation>
        <ActivatePage/>
        </Navigation>
        {/* {token && token ? (
          <div>
          <h2>Activate Account</h2>
          <button onClick={handleActivateUser}>Activate user</button>
          </div>
        ) : (
        <div>
          <h2>Login</h2>
          <input placeholder="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
          <input placeholder="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
          <button onClick={handleLogin}>Login</button>
        </div>
        )} */}

      </Route>

        <Route path="/">
          <Navigation>
          <RegisterPage/>
          {/* <h2>Register</h2>
          <p>Enter details to register</p>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            placeholder="Organisation Name"
            value={organisationName}
            onChange={e => setOrganisationName(e.target.value)}
          />
          <input
            placeholder="Organisation Kind (0,1,2)"
            value={organisationKind}
            onChange={e => setOrganisationKind(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button> */}
          </Navigation>
        </Route>


      </Switch>
      </CustomerContext.Provider>
    </div>
  )
}
export default App
/*
email: nackademin@willandskill.se
password: js-fend-19

email: "frida.johansson888+1@gmail.com"
firstName: "abc"
lastName: "def"
organisationKind: "1"
organisationName: "abc company"
password: "js-fend-19"



email: "frida.johansson888+2@gmail.com"
firstName: "Frida"
lastName: "Johansson"
organisationKind: "2"
organisationName: "Fridas AB"
password: "js-fend-19"


firstName: "Frida", lastName: "Johansson", email: "frida.johansson888+3@gmail.com",…}
email: "frida.johansson888+3@gmail.com"
firstName: "Frida"
lastName: "Johansson"
organisationKind: "1"
organisationName: "abc"
password: "js-fend-19"
*/
