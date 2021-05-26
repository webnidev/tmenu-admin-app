import React from 'react'
import { Typography, 
    TextField, Grid, 
    GridRow, 
    GridCell, 
    Button, 
    Switch,
    Select,
    DataTable,
    DataTableContent,
    DataTableRow,
    DataTableBody,
    DataTableCell
} from "rmwc";
import MainNav from '../../MainNav'
import { useNavigate } from 'react-router-dom';
import {CREATE_USER, GET_COMPANIES} from '../../api'
import useForm from '../../Hooks/useForm'
const AddUser =()=>{
    const [data, setData] = React.useState([])
    const [companyList, setCompanyList] = React.useState([])
    const navigate = useNavigate();
    const comp = useForm()
    const getData = async () =>{
        try {
            const token = window.localStorage.getItem('token')
            if(!token) throw new Error('Error: token inválido!')
            const paginate = {page:1, perPage:null}
            const {url, options} = GET_COMPANIES(token, paginate)
            const response = await fetch(url, options)
            if(!response.ok) throw new Error(`Error: ${response.statusText}`)
            const {company} = await response.json()
            setData(company.data)

        } catch (error) {
            console.log(error)
        }
    }


    const updateList = async =>{
        setCompanyList(filterCompany(comp.value))
        
    }

    const filterCompany =  (value) =>{
        return data.filter( el => {
            return  el.name.toLowerCase().indexOf( value.toLowerCase()) > -1
        })
    }

    
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

    React.useEffect(()=>{
        getData()
    },[])

    React.useEffect(()=>{
        updateList()
    },[comp.value])

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
                        <GridCell span={6}> 
                        <TextField fullwidth placeholder="Empresa" name="companies" {...comp} />
                        <ul style={{"list-style":"none"}}>
                            {companyList.map(company=>{
                                return(
                                    <li>{company}</li>
                                )
                            })
                            }
                            </ul>
                        </GridCell>            
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