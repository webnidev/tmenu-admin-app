import React from "react";
import MainNav from "./MainNav";
import Home from "./components/Home";
import CompaniesIndex from "./components/Companies/CompaniesIndex";
import AddCompany from "./components/Companies/AddCompany";
import Company from "./components/Companies/Company"
import AddUser from "./components/Users/AddUser";
import ChargesIndex from "./components/Charges/ChargesIndex";
import BillingIndex from "./components/Billing/BillingIndex";
import UsersIndex from "./components/Users/UsersIndex";
import AccountIndex from "./components/Account/AccountIndex";
import TaxRulesIndex from "./components/TaxRules/TaxRulesIndex";
import IntegrationsIndex from "./components/Integrations/IntegrationsIndex";
import Login from "./components/Login/Login";
import Logout from './components/Logout/Logout'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import  ProtectedRoute  from './Helper/ProtectedRoute'
import RedirectToHome from './Helper/RedirectToHome'
import { UserStorage } from './UserContext';
import { UsersStorage } from './UsersContext';
const App = () => {
  return (
    <BrowserRouter> 
      <UserStorage>           
      <div className={"MainContainer"}>
        <Routes>
          <RedirectToHome path="/login" element={<Login />} />
          <ProtectedRoute path="/" element={<Home />} end />
          <ProtectedRoute path="/companies" element={ <CompaniesIndex/>} />
          <ProtectedRoute path="/company/:id" element={ <Company/>} />
          <ProtectedRoute path="/add-company" element={ <AddCompany/>} />
          <ProtectedRoute path="/add-user" element={ <AddUser/>} />
          <ProtectedRoute path="/charges" element={ <ChargesIndex/>} />
          <ProtectedRoute path="/billing" element={ <BillingIndex/>} />
          <UsersStorage>
          <ProtectedRoute path="/users" element={ <UsersIndex/> } /> 
          </UsersStorage>
          <ProtectedRoute path="/my-account" element={ <AccountIndex/>} />
          <ProtectedRoute path="/tax-rules" element={ <TaxRulesIndex/>} />
          <ProtectedRoute path="/integrations" element={ <IntegrationsIndex/>} />
          <ProtectedRoute path="/logout" element={<Logout />} />
        </Routes>
      </div>      
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
