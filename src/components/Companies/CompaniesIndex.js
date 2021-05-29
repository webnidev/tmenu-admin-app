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
  Icon,
  CircularProgress
} from "rmwc";

import { GET_COMPANIES, UPDATE_COMPANY } from '../../api';
import Pagination from '../Pagination/Pagination'

const CompaniesIndex = () => {

function cadastrarNovo(){
  window.location.href = "/add-company";
}
//   const [status, setStatus] = React.useState(false);
//const [company, setCompany] = React.useState([])
const [data, setData] = React.useState([])
const [paginate, setPaginate] = React.useState({total:0, perPage:10, page:1, lastpage:0})
const [loaded, setLoaded] = React.useState(true)
const getData = async ()=>{
  try {
    const token = window.localStorage.getItem('token')
  if(token){
    const { url, options } = GET_COMPANIES(token,paginate) 
    const response = await fetch(url, options)
    if(!response.ok) throw new Error(`Error: ${response.statusText}`)
    const {company} = await response.json()
    setData(company.data)
    setPaginate({total:company.total, perPage:company.perPage, page:company.page, lastpage:company.lastPage})
  }
    
  } catch (error) {
    console.log(error)
  }
  finally{
    setLoaded(false)
  }
  
 
}
const handleSubimit = async event =>{
  event.preventDefault()
  const search = `${event.target.name.value}`
  const token = window.localStorage.getItem('token')
  const {url, options} = GET_COMPANIES(token, paginate, search)
  const response = await fetch(url, options)
  if(!response.ok) throw new Error(`Error: ${response.statusText}`)
  const {company} = await response.json()
  setData(company.data)
  setPaginate({total:company.total, perPage:company.perPage, page:company.page, lastpage:company.lastPage})
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

const paginateUpdate =async event =>{
  try {
      const token = window.localStorage.getItem('token')
      paginate.page=event.target.id
      setPaginate(paginate)
      if(!token){
          throw new Error(`Error: Token inválido`)
      }
      const {url, options} = GET_COMPANIES(token, paginate)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {company} = await response.json()
      setData(company.data)
      
  } catch (error) {
      console.log(error)
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
          {loaded &&
           <div className={"loading"}> 
          <CircularProgress size={125} />
          </div>
          }
          { !loaded &&
          <div>        
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
                        <DataTableCell><a href={`/company/${company.id}`}>{company.name}</a></DataTableCell>
                        <DataTableCell alignEnd>{company.cnpj}</DataTableCell>
                        <DataTableCell alignEnd>{company.phone}</DataTableCell>
                          <SimpleMenu handle={<IconButton icon="zoom_in"/>}>
                            <MenuItem><Icon icon={{ icon: 'info', size: 'small' }} /><a href={`/company/${company.id}`}> Ver Detalhes</a></MenuItem>
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
                <GridRow>
                  <Pagination paginate={paginate} paginateUpdate={paginateUpdate}/>
                </GridRow>
            </Grid>
            </div>
          }

        </div>   
      
    </>
  );
};

export default CompaniesIndex;
