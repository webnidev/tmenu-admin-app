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
const [paginate, setPaginate] = React.useState({total:0, perPage:5, page:1, lastPage:0})

const getData = async ()=>{
  const token = window.localStorage.getItem('token')
  if(token){
    const { url, options } = GET_COMPANIES(token,paginate) 
    const response = await fetch(url, options)
    if(!response.ok) throw new Error(`Error: ${response.statusText}`)
    const {company} = await response.json()
    setData(company.data)
    setPaginate({total:company.total, perPage:company.perPage, page:company.page, lastPage:company.lastpage})
  }
 
}
const handleSubimit = async event =>{
  event.preventDefault()
  const search = `&name=${event.target.name.value}`
  const token = window.localStorage.getItem('token')
  const {url, options} = GET_COMPANIES(token, paginate, search)
  const response = await fetch(url, options)
  if(!response.ok) throw new Error(`Error: ${response.statusText}`)
  const {company} = await response.json()
  setData(company.data)
  setPaginate({total:company.total, perPage:company.perPage, page:company.page, lastPage:company.lastPage})
}
const updateStatus = async event =>{
  event.preventDefault()
  console.log("event update")
  const token = window.localStorage.getItem('token')
  const status = [false,true]
  if(token){
    const { url, options } = UPDATE_COMPANY(token, event.target.id, status[event.target.value]);
    const updated = await fetch(url,options)
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
                        <form onSubmit={handleSubimit}>                      
                        <TextField className={"CustomInputSearch"} name="name" outlined label="Buscar por Nome ou CNPJ..." />
                        <Button label="Pesquisar" outlined icon="search" className={"BtnDefaultSearch"} type="submit"/>
                        </form>
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
                      <DataTableRow key={company.id}>
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
                              <MenuItem onClick={updateStatus} id={company.id} value="1">Atualizar para:   <strong className="TmenuDangerText">Inativo</strong></MenuItem>: 
                              <MenuItem onClick={updateStatus} id={company.id} value="0">Atualizar para:   <strong className="TmenuSuccessText">Ativo</strong></MenuItem>
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
