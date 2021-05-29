import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import "material-icons";

import {
  Drawer,
  DrawerHeader,
  DrawerContent,
  List,
  ListItem,
  ListItemGraphic,
} from "rmwc";

import "rmwc/dist/styles";
import "./GlobalCustom.css";
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


const MainNav = () => {
  return (
    <>
     
        <Drawer>
          <DrawerHeader>
            <Logo/>
            {/* <DrawerSubtitle>Subtítulo</DrawerSubtitle> */}
          </DrawerHeader>
          <DrawerContent className={"Menu"}>
            <hr className={"Divider"} />
            <List>
              <ListItem tag={Link} to="/">
                <ListItemGraphic icon="dashboard" /> Painel
              </ListItem>
              <ListItem tag={Link} to="/companies">
                <ListItemGraphic icon="business" /> Estabelecimentos                  
              </ListItem>
              <ListItem tag={Link} to="/charges">
                <ListItemGraphic icon="credit_card" /> Cobranças
              </ListItem>
              {/*<ListItem tag={Link} to="/billing">
                <ListItemGraphic icon="attach_money" /> Faturamento
              </ListItem>*/}
              <ListItem tag={Link} to="/users">
                <ListItemGraphic icon="supervisor_account" /> Usuários
              </ListItem>                           
              <hr className={"Divider"} />              
              <ListItem tag={Link} to="/my-account">
                <ListItemGraphic icon="settings" /> Minha Conta
              </ListItem>
              <ListItem tag={Link} to="/tax-rules">
                <ListItemGraphic icon="tune" /> Gestão de Taxas
              </ListItem>
              {/*<ListItem tag={Link} to="/integrations">
                <ListItemGraphic icon="sync_alt" /> Integrações
            </ListItem>*/}
              <hr className={"Divider"} />              
              <ListItem tag={Link} to="/logout" >
                <ListItemGraphic icon="exit_to_app" /> Sair
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>

       

    </>
  );
};

export default MainNav;
