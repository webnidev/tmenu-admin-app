import React from 'react'
import {useParams} from 'react-router-dom'
import MainNav from '../../MainNav'
import { Grid, 
        GridCell, 
        GridRow,
        Typography,
        Button,
        TextField,
        DataTable,
        DataTableContent,
        DataTableHead,
        DataTableRow,
        DataTableHeadCell,
        DataTableBody,
        DataTableCell,
        SimpleMenu,
        MenuItem, 
        Badge,
        IconButton,
        Icon,
        CircularProgress
} from 'rmwc'
import { GET_COMPANY } from '../../api'
const Company=()=>{
    const {id} = useParams()
    const [company, setCompany]= React.useState({})
    const [loaded, setLoaded] = React.useState(true)
    const getCompany =async()=>{
        try {
            const token = window.localStorage.getItem('token')
            if(!token) throw new Error('Error: token invalido!')
            const {url, options} = GET_COMPANY(token, id)
            const response =await fetch(url, options)
            if(!response.ok) throw new Error(`Error: ${response.statusText}`)
            const {company} = await response.json()
            setCompany(company)
        } catch (error) {
            console.log(error)
        }finally{
            setLoaded(false)
        }
    } 

    React.useEffect(()=>{
        getCompany()
    },[])

    return(
        <>
        <MainNav/>
        <div className={"PageContainer"}>
        { loaded && 
            <div  className={"loading"}>
            <CircularProgress size={125} />
            </div>}

        {
            !loaded && 
            <div>
                <div className={"PageTitle"}>        
                    <h1><Typography use="headline1">{company.name}</Typography></h1>             
                </div>
                <div  className="expoContainer">
                <Grid>
            <GridRow>
                <GridCell span={12}>
                    
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Nome: {company.name}</Typography></GridCell>
                        <GridCell span={6}> <Typography use="headline6">CNPJ: {company.cnpj}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Email: {company.email}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">Responsável: {company.responsible}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Fone: {company.phone}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">Fone Responsável: {company.responsible_phone}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Data de cadastro: {company.created_at}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">Ultima fatura: {company.last_billing}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={4}><Typography use="headline6">Plano: {company.plan_id}</Typography></GridCell>
                        <GridCell span={4}><Typography use="headline6">Categoria: {company.category}</Typography></GridCell>
                        <GridCell span={4}><Typography use="headline6">Status: {company.status?"Ativo":"Inativo"}</Typography></GridCell>
                    </GridRow>
                    
                </GridCell>
            </GridRow>
        </Grid>
                </div>
                <div className={"PageTitle"}>
                <h2><Typography use="headline3">Endereço</Typography></h2>
                </div>
                <div  className="expoContainer">
        <Grid>
            <GridRow>
                <GridCell span={12}>
                    
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Rua: {company.address.street}</Typography></GridCell>
                        <GridCell span={3}> <Typography use="headline6">Número: {company.address.number}</Typography></GridCell>
                        <GridCell span={3}> <Typography use="headline6">CEP: {company.address.zipcode}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Bairro: {company.address.district}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">Cidade: {company.address.state}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Complemento: {company.address.complement}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">País: {company.address.country}</Typography></GridCell>
                    </GridRow>
                    <GridRow>
                        <GridCell span={6}><Typography use="headline6">Data de cadastro: {company.created_at}</Typography></GridCell>
                        <GridCell span={6}><Typography use="headline6">Ultima fatura: {company.last_billing}</Typography></GridCell>
                    </GridRow>
                    
                </GridCell>
            </GridRow>
        </Grid>
                </div>
                <div className={"PageTitle"}>
                <h2><Typography use="headline3">Mesas</Typography></h2>
                </div>
                <div  className="expoContainer">
                    <Grid>
                        <GridRow>
                            <GridCell>
                            <DataTable className={"TabelaPadrao"}>
                                <DataTableContent>
                                    <DataTableHead>
                                    <DataTableRow>
                                        <DataTableHeadCell>Código</DataTableHeadCell>                        
                                        <DataTableHeadCell alignEnd>Número</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Código de link</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Status</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Tota de comandas</DataTableHeadCell>
                                    </DataTableRow>
                                    </DataTableHead>
                                 
                                        <DataTableBody>
                                            {
                                                
                                                company.tables.map(table=>{
                                                    return(
                                                        <DataTableRow key={table.id}>
                                                        <DataTableCell>{table.id}</DataTableCell>
                                                        <DataTableCell alignEnd><a href={`/table/${table.id}`}>{table.number}</a></DataTableCell>
                                                        <DataTableCell alignEnd>{table.hashcode}</DataTableCell>
                                                        <DataTableCell>{table.status?"Ocupada":"Livre"}</DataTableCell>
                                                        <DataTableCell>{table.cards.length}</DataTableCell>
                                                        <DataTableCell><a href={`/table/edit/${table.id}`}>Editar</a></DataTableCell>
                                                        <DataTableCell><a href={`/table/delete/${table.id}`}>Excluir</a></DataTableCell>
                                                    </DataTableRow>
                                                    )
                                                    
                                                })
                                            }
                                        </DataTableBody>
                                    </DataTableContent>
                                    </DataTable>    

                            </GridCell>
                        </GridRow>
                    </Grid>
                </div>
                <div className={"PageTitle"}>
                <h2><Typography use="headline3">Gerentes</Typography></h2>
                </div>
                <div  className="expoContainer">
                    <Grid>
                        <GridRow>
                            <GridCell>
                            <DataTable className={"TabelaPadrao"}>
                                <DataTableContent>
                                    <DataTableHead>
                                    <DataTableRow>
                                        <DataTableHeadCell>Código</DataTableHeadCell>                        
                                        <DataTableHeadCell alignEnd>Nome</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Email</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>CPF</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Telefone</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Data de cadastro</DataTableHeadCell>
                                    </DataTableRow>
                                    </DataTableHead>
                                 
                                        <DataTableBody>
                                            {
                                                
                                                company.managers.map(manager=>{
                                                    return(
                                                        <DataTableRow key={manager.id}>
                                                        <DataTableCell>{manager.id}</DataTableCell>
                                                        <DataTableCell alignEnd><a href={`/user/${manager.id}`}>{manager.name}</a></DataTableCell>
                                                        <DataTableCell alignEnd>{manager.email}</DataTableCell>
                                                        <DataTableCell>{manager.cpf}</DataTableCell>
                                                        <DataTableCell>{manager.phone}</DataTableCell>
                                                        <DataTableCell>{manager.created_at}</DataTableCell>
                                                    </DataTableRow>
                                                    )
                                                    
                                                })
                                            }
                                        </DataTableBody>
                                    </DataTableContent>
                                    </DataTable>    

                            </GridCell>
                        </GridRow>
                    </Grid>
                </div>
                <div className={"PageTitle"}>
                <h2><Typography use="headline3">Garçons</Typography></h2>
                </div>
                <div  className="expoContainer">
                    <Grid>
                        <GridRow>
                            <GridCell>
                            <DataTable className={"TabelaPadrao"}>
                                <DataTableContent>
                                    <DataTableHead>
                                    <DataTableRow>
                                        <DataTableHeadCell>Código</DataTableHeadCell>                        
                                        <DataTableHeadCell alignEnd>Nome</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Email</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>CPF</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Telefone</DataTableHeadCell>
                                        <DataTableHeadCell alignEnd>Data de cadastro</DataTableHeadCell>
                                    </DataTableRow>
                                    </DataTableHead>
                                 
                                        <DataTableBody>
                                            {
                                                
                                                company.waiters.map(waiter=>{
                                                    return(
                                                        <DataTableRow key={waiter.id}>
                                                        <DataTableCell>{waiter.id}</DataTableCell>
                                                        <DataTableCell alignEnd><a href={`/user/${waiter.id}`}>{waiter.name}</a></DataTableCell>
                                                        <DataTableCell alignEnd>{waiter.email}</DataTableCell>
                                                        <DataTableCell>{waiter.cpf}</DataTableCell>
                                                        <DataTableCell>{waiter.phone}</DataTableCell>
                                                        <DataTableCell>{waiter.created_at}</DataTableCell>
                                                    </DataTableRow>
                                                    )
                                                    
                                                })
                                            }
                                        </DataTableBody>
                                    </DataTableContent>
                                    </DataTable>    

                            </GridCell>
                        </GridRow>
                    </Grid>
                </div>
            </div>
        }
        </div>
        </>
    )
}

export default Company