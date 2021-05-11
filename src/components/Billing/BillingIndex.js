import React from 'react'
import MainNav from '../../MainNav';
import { Typography } from "rmwc";

const BillingIndex = () => {
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Faturamento</Typography></h1>             
          </div>
          
        </div>
        </>
    )
}

export default BillingIndex
