import React from "react";
import MainNav from '../../MainNav'
import { Grid, GridCell, GridRow,
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
  Icon

} from "rmwc";

import { GET_COMPANIES, UPDATE_COMPANY } from '../../api';


const CompaniesIndex = () => {

function cadastrarNovo(){
  window.location.href = "/add-company";
}
//   const [status, setStatus] = React.useState(false);
//const [company, setCompany] = React.useState([])
const [data, setData] = React.useState([])
const getData = async ()=>{
  const token = window.localStorage.getItem('token')
  if(token){
    const { url, options } = GET_COMPANIES(token); 
    const response = await fetch(url, options)
    if(!response.ok) throw new Error(`Error: ${response.statusText}`);
    const {company} = await response.json()
    setData(company.data)
  }
 
}

const updateStatus = async event =>{
  event.preventDefault()
  const token = window.localStorage.getItem('token')
  if(token){
    const { url, options } = UPDATE_COMPANY(token, event.target.id.value, event.target.status.value);
    const updated = await fetch(url,options)
    console.log(updated)
    if(updated.ok){
      window.location.reload()
    }
  }
}

React.useEffect(()=>{
  getData()
},[])


  return (
    <>          
    <MainNav/>
     <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Estabelecimentos</Typography></h1>             
          </div>        
          <Grid className={"CustomContainer"}>
            <GridRow>
                    <GridCell span={8}>
                      <Button onClick={cadastrarNovo} className={"BtnDefaultTmenu"} label="Cadastrar Novo" icon="add" />     
                    </GridCell>                    
                    <GridCell span={4}>                      
                        <TextField className={"CustomInputSearch"} outlined label="Buscar por Nome ou CNPJ..." />
                        <Button label="Pesquisar" outlined icon="search" className={"BtnDefaultSearch"}/>
                    </GridCell>
                </GridRow>       
            </Grid>


            <Grid className={"CustomContainer"}>
            <GridRow>
              <GridCell>
                <DataTable className={"TabelaPadrao"}>
                  <DataTableContent>
                    <DataTableHead>
                      <DataTableRow>
                        <DataTableHeadCell>Estabelecimento</DataTableHeadCell>                        
                        <DataTableHeadCell alignEnd>CNPJ</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Telefone</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Ações</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Status</DataTableHeadCell>
                        <DataTableHeadCell alignEnd></DataTableHeadCell>
                      </DataTableRow>
                    </DataTableHead>
                    <DataTableBody>

                      { data.map( company =>{
                        return(
                      <DataTableRow>
                        <DataTableCell><a href="/">{company.name}</a></DataTableCell>
                        <DataTableCell alignEnd>{company.cnpj}</DataTableCell>
                        <DataTableCell alignEnd>{company.phone}</DataTableCell>
                          <SimpleMenu handle={<IconButton icon="zoom_in"/>}>
                            <MenuItem><Icon icon={{ icon: 'info', size: 'small' }} /> Ver Detalhes</MenuItem>
                            <MenuItem><Icon icon={{ icon: 'open_in_new', size: 'small' }} /> Logar</MenuItem>
                          </SimpleMenu> 
                        <DataTableCell alignEnd><Badge className={company.status?"TmenuSuccess":"TmenuDanger"} align="inline" label={company.status?"Ativo":"Inativo"} /></DataTableCell>
                              <SimpleMenu handle={<IconButton icon="keyboard_arrow_down" label="Aterar status" />}>
                                {company.status?
                                <MenuItem>Atualizar para:  <strong className="TmenuDangerText" status={company.status} id={company.id} onClick={updateStatus}> Inativo</strong></MenuItem>:
                                <MenuItem>Atualizar para:  <strong className="TmenuSuccessText" status={company.status} id={company.id} onClick={updateStatus}> Ativo</strong></MenuItem>  
                              }
                              </SimpleMenu>  
                      </DataTableRow>) }  )}        

                    </DataTableBody>
                  </DataTableContent>
                </DataTable>
                </GridCell>
                </GridRow>
            </Grid>


        </div>   
      
    </>
  );
};

export default CompaniesIndex;
