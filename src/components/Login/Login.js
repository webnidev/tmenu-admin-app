import React from 'react';
import { Typography, TextField, Grid, GridRow, GridCell, Button } from "rmwc";
import {LoginUser} from '../../connect/load_data'
const Login = () => {
  async function handleSubimit(event){  
    event.preventDefault()  
      LoginUser({email: event.target.email.value, password:event.target.password.value})
  }
  return (
    <>
     <div className={"PageContainer"}>
     <div className={"PageTitle"}>
        <h1><Typography use="headline1">LOGIN</Typography></h1>
      </div>
      <form className="formContainer" onSubmit={handleSubimit}>
        <Grid>
          <GridRow>
            <GridCell span={12}><TextField type="email" name="email" fullwidth placeholder="Email" /></GridCell>
          </GridRow>
          <GridRow>
            <GridCell span={12}><TextField type="password" name="password" fullwidth placeholder="Password" /></GridCell>
          </GridRow>
          <GridRow>
            <GridCell span={12}><Button type="submit" className={"BtnDefaultTmenu"} label="Entrar" icon="/login.png" /> </GridCell>
          </GridRow>
        </Grid>
      </form>
    </div>
    </>
  )
}

export default Login;