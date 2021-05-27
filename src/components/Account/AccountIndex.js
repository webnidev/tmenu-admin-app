import React from 'react'
import { Typography, TextField, Grid, GridRow, GridCell, Button, SnackbarAction, Snackbar } from "rmwc";
import { GET_USER, UPDATE_USER } from '../../api';
import MainNav from '../../MainNav';

const AccountIndex = () => {
  const [user, setuser] = React.useState({})
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState()
  const [name, setName] = React.useState('')
  const [id, setId] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [created_at, setCreatedAt] = React.useState('')
  const getUser = async ()=>{
    try {
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error('Error: token inválido!')
      const {url, options} = GET_USER(token)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {user} = await response.json()
      setuser(user)
      setName(user.name)
      setUsername(user.username)
      setId(user.id)
      setEmail(user.email)
      setCpf(user.cpf)
      setPhone(user.phone)
      setCreatedAt(user.created_at)
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate = async event =>{
    event.preventDefault();
    const data ={
      name: event.target.name.value,
      cpf: event.target.cpf.value,
      phone:event.target.phone.value,
      email:event.target.email.value,
      username:event.target.username.value,
      id:id
    }
    try {
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error('Error: token inválido!')
      const {url, options} = UPDATE_USER(token, data)
      const response = await fetch(url, options)
      console.log(response.status)
      if(!response.ok){
        setMessage('Houve um erro ao atualizar o usuario!')
        setOpen(true)
        throw new Error(`Error: ${response.statusText}`)
      } 
      setMessage('Usário atualizado com sucesso!')
      setOpen(true)
    } catch (error) {
      console.log(error)
        setMessage('Houve um erro ao atualizar o usuario!')
        setOpen(true)
    }
  }

  React.useEffect(()=>{
    getUser()
  },[])
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Minha Conta </Typography>  </h1>             
          </div>
          <form onSubmit={handleUpdate}>
          <div className="formContainer">
          <Grid>
            <GridRow>
              <GridRow>
                <GridCell><strong>GERENTE</strong></GridCell>
              </GridRow>
              <GridCell span={12}>
                <GridCell span={6}><TextField fullwidth label="Nome" name="name" value={name} onChange={({target})=>setName(target.value)} /></GridCell>
                <GridRow>
                  <GridCell span={6}> <TextField fullwidth label="CPF" name="cpf"  value={cpf} onChange={({target})=>setCpf(target.value)}/></GridCell>                    
                  <GridCell span={6}> <TextField fullwidth label="Telefone" name="phone"  value={phone} onChange={({target})=>setPhone(target.value)}/></GridCell>
                </GridRow>
                <GridRow>
                  <GridCell span={6}> <TextField fullwidth label="Usuário" name="username" value={username}/></GridCell>                    
                  <GridCell span={6}> <TextField fullwidth label="Email" name="email" type="email"  value={email} onChange={({target})=>setEmail(target.value)}/></GridCell>
                </GridRow>
                <GridRow>
                  <GridCell span={6}> <TextField fullwidth label="Código" name="id" value={id}/></GridCell>                    
                  <GridCell span={6}> <TextField fullwidth label="Data de criação" name="created_at" value={created_at}/></GridCell>
                </GridRow>
                <GridRow>
                    <GridCell span={6}>  
                      <Button className={"BtnDefaultTmenu"}  label="Atualizar" icon="save" /> 
                      <Button className={""} onClick={()=>{window.history.back()}} label="Voltar" />     
                    </GridCell>                        
                </GridRow>  
              </GridCell> 
            </GridRow>
          </Grid>
          </div>
          </form>
        </div>
        <Snackbar
        open={open}
        onClose={evt => setOpen(false)}
        message={message}
        dismissesOnAction
        action={
          <SnackbarAction
            label="Ok"
            onClick={() => console.log('Click Me')}
          />
        }
      />
        </>
    )
}

export default AccountIndex