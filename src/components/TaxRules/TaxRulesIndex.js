import React from 'react'
import { Typography } from "rmwc";
import MainNav from '../../MainNav';

const TaxRulesIndex = () => {
    return (
        <>
          <MainNav />
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Gestão de Taxas</Typography></h1>             
          </div>
        </div>
        </>
    )
}

export default TaxRulesIndex
