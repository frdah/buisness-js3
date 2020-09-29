import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import { CustomerContext } from "./contexts/CustomerContext";
import {UserContext } from "./contexts/UserContext";
import Navigation from "./components/Navigation"
import ActivatePage from "./pages/ActivatePage"
import CustomerDetailPage from "./pages/CustomerDetailPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage";
import {MainDiv} from "./components/styles"

function App() {
  const [customers, setCustomers] = useState(null);
  const [userInfo, setUserInfo] = useState({})

  return (
    <MainDiv>
      <CustomerContext.Provider value={{customers, setCustomers}}>
      <UserContext.Provider value={{userInfo, setUserInfo}}>


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
        </Route>
        
      <Route path="/login">
        <Navigation>
        <ActivatePage/>
        </Navigation>
      </Route>

      <Route path="/profile">
        <Navigation>
          <ProfilePage/>
        </Navigation>
      </Route>



        <Route path="/">
          <Navigation>
            <RegisterPage/>
          </Navigation>
        </Route>


    </Switch>
      </UserContext.Provider>
      </CustomerContext.Provider>
    </MainDiv>
  )
}
export default App

