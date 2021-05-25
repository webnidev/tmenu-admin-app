import React from 'react'
import { Typography, TextField, Grid, GridRow, GridCell, Button, Switch,Select } from "rmwc";
import MainNav from '../../MainNav'
import { useNavigate } from 'react-router-dom';
import {CREATE_USER} from '../../api'
const AddUser =()=>{
    const navigate = useNavigate();
    const handleUser = async event =>{
        event.preventDefault()
        try {
            const body = {
                name:event.target.name.value,
                email:event.target.email.value,
                password:event.target.password.value,
                cpf:event.target.cpf.value,
                phone:event.target.phone.value,
                role:event.target.role.value,
                company_id:event.target.company_id.value

            }
            const token = window.localStorage.getItem('token')
            if(!token) throw new Error('Error: Token inválido')
            const {url, options} = CREATE_USER(token, body)
            const response = await fetch(url, options)
            if(!response.ok) throw new Error(`Error: ${response.statusText}`)
            navigate('/users')
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
        <MainNav/>
        <div className={"PageContainer"}>
        <div className={"PageTitle"}>        
            <h1><Typography use="headline1">CADASTRO DE USUARIO</Typography></h1>             
        </div>
        <form  onSubmit={handleUser}>
            <div className="formContainer">
        <Grid>
            <GridRow>
                <GridCell span={12}>
                    <GridRow>
                        <GridCell span={6}><TextField fullwidth placeholder="Nome" name="name" /></GridCell>
                        <GridCell span={6}> <TextField fullwidth placeholder="CPF" name="cpf" /></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><TextField fullwidth placeholder="Email" name="email" /></GridCell>
                        <GridCell span={6}> <TextField fullwidth placeholder="Telefone" name="phone" /></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><TextField fullwidth placeholder="Senha" name="password" type="password"/></GridCell>
                        <GridCell span={6}> <TextField fullwidth placeholder="Confirme a senha" name="password-confirm"  type="password"/></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}>
                        <Select label="Tipo de Usuário" name='role' defaultValue="manager">
                            <option value="manager">Gerente</option>
                            <option value="client">Cliente</option>
                            <option value="waiter">Garçom</option>
                            <option value="admin">Admin</option>
                            </Select>
                        </GridCell>
                        <GridCell span={6}> <TextField fullwidth placeholder="Empresa" name="company_id" /></GridCell>
                    </GridRow>
                    <br/>
                    <GridRow>
                        <GridCell span={6}>  
                        <Button className={"BtnDefaultTmenu"} label="Salvar" icon="save" /> 
                        <Button className={""} onClick={()=>{window.history.back()}} label="Voltar" />     
                        </GridCell>                        
                    </GridRow>    
                </GridCell>
            </GridRow>
        </Grid>
        </div>
        </form>
        </div>

        </>
    )
}

export default AddUser