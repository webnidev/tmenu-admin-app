import React from 'react';
import { Typography, TextField, Grid, GridRow, GridCell, Button, Switch, PasswordField } from "rmwc";

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const  handleSubimit = async event=>{
    event.preventDefault()
    const response = await fetch('https://api.tmenu.com.br/v1/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'Aplication/json'
      },
      body:JSON.stringify({
        email:event.target.email.value, 
        password:event.target.password.value
      })
    })
    const res = response.json()
    console.log(response)
    return
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