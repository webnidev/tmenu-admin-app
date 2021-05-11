import React from "react";
import MainNav from "./MainNav";
import Home from "./components/Home";
import CompaniesIndex from "./components/Companies/CompaniesIndex";
import AddCompany from "./components/Companies/AddCompany";
import ChargesIndex from "./components/Charges/ChargesIndex";
import BillingIndex from "./components/Billing/BillingIndex";
//import UsersIndex from "./components/Users/UsersIndex";
import AccountIndex from "./components/Account/AccountIndex";
import TaxRulesIndex from "./components/TaxRules/TaxRulesIndex";
import IntegrationsIndex from "./components/Integrations/IntegrationsIndex";
import Login from "./components/Login/Login";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>            
      <div className={"MainContainer"}>
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/companies" element={ <CompaniesIndex/>} />
          <Route path="/add-company" element={ <AddCompany/>} />
          <Route path="/charges" element={ <ChargesIndex/>} />
          <Route path="/billing" element={ <BillingIndex/>} />
          {/* <Route path="/users" element={ <UsersIndex/> } /> */}
          <Route path="/my-account" element={ <AccountIndex/>} />
          <Route path="/tax-rules" element={ <TaxRulesIndex/>} />
          <Route path="/integrations" element={ <IntegrationsIndex/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>      
    </BrowserRouter>
  );
};

export default App;
