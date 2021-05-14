import React from 'react';
import { Typography } from "rmwc";
import MainNav from '../../MainNav'

const UsersIndex = () => {
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Usuários</Typography></h1>             
          </div>
          
        </div>
        </>
    )
}

export default UsersIndex;
