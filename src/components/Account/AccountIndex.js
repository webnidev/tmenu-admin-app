import React from 'react'
import { Typography } from "rmwc";
import MainNav from '../../MainNav';

const AccountIndex = () => {
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Minha Conta</Typography></h1>             
          </div>
          
        </div>
        </>
    )
}

export default AccountIndex
