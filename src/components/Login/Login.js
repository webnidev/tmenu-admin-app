import React from 'react';
import { Typography, TextField, Grid, GridRow, GridCell, Button } from "rmwc";
import { UserContext } from '../../UserContext';
import useForm from '../../Hooks/useForm'
const Login = () => {
  const email = useForm()
  const password = useForm()
  const { userLogin, login , error} = React.useContext(UserContext);
  async function handleSubimit(event){  
    event.preventDefault()  
      userLogin({email: event.target.email.value, password:event.target.password.value})
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
            <GridCell span={12}>
              <TextField  name="email" type="email" fullwidth placeholder="Email" {...email} />
              </GridCell>
          </GridRow>
          <GridRow>
            <GridCell span={12}>
              <TextField  name="password" type="password" fullwidth placeholder="Password" {...password} />
              
              </GridCell>
          </GridRow>
          {error}
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