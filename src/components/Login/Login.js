import React from 'react';
import { Navigate } from 'react-router-dom'
import { Typography, TextField, Grid, GridRow, GridCell, Button } from "rmwc";
import {login} from '../../connect/load_data'
const Login = () => {
  const  handleSubimit = async event=>{
    event.preventDefault()
    const data = await login({email: event.target.email.value, password:event.target.password.value})
    if(data.token){
      console.log(data.token)
      window.localStorage.setItem('token',data.token)
      return <Navigate to="/" />
    }else{
      return <Navigate to="/login" />
    }
   
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