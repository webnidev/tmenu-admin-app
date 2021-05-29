import React from 'react'
import MainNav from '../../MainNav'
import { 
  Typography,
  Grid,
  GridRow,
  GridCell,
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
  Button,
  Badge,
  SimpleMenu,
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
  CircularProgress
} from "rmwc";
import { GET_BILLINGS, SEND_BILLING, UPDATE_BILLING } from '../../api';
import Pagination from '../Pagination/Pagination'

const ChargesIndex = () => {
  const [data, setData] = React.useState([])
  const [showperiod, setShowperiod] = React.useState(false)
  const [paginate, setPaginate] = React.useState({total:0, perPage:10, page:1, lastpage:0})
  const [dialog, setDialog] = React.useState(false)
  const [id, setId] = React.useState(0)
  const [urlPayment,setUrlPayment] = React.useState('')
  const [loaded, setLoaded] = React.useState(true)

  const showDialog = async (event) =>{
    event.preventDefault()
    setId(event.target.id)
    console.log(event.target.id)
    console.log(id)

    setDialog(true)
  }



  const getData = async ()=>{
    try {
      const token = window.localStorage.getItem('token')
      if(!token){
        throw new Error(`Error: Token inválido`)
      }
        const { url, options } = GET_BILLINGS(token,paginate)
        const response = await fetch(url, options)
        if(!response.ok) throw new Error(`Error: ${response.statusText}`)
        const {billings} = await response.json()
        setData(billings.data)
        setPaginate({total:billings.total, perPage:billings.perPage, page:billings.page, lastpage:billings.lastpage})
    } catch (error) {
      console.log(error)
    }finally{
      setLoaded(false)
    }
  }

  const updateStatus = async event =>{
    event.preventDefault()
    try {
      const token = window.localStorage.getItem('token')
      const status = ["CANCELADA", "PAGA"]
      const {url, options} = UPDATE_BILLING(token, event.target.id, status[event.target.value])
      const response = await fetch(url, options)
      console.log(response)
      if(!response.ok){
        throw new Error(`Error: ${response.statusText}`)
      }
      if(response.ok){
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }

    console.log(event.target.id)
    console.log(event.target.value)
  }

  const handleSendBilling = async (event) =>{
    event.preventDefault()
    try {
      const body = {billing_id:id,billing_link:event.target.urlPayment.value }
      const  token = window.localStorage.getItem('token') 
      const {url, options} = SEND_BILLING(token,body)
      console.log(options.body)
      const response = await fetch(url, options)
      const {billing} = await response.json()
      if(response.ok){
        setUrlPayment('')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }

  }

  const handleSearchToStatus = async event =>{
    event.preventDefault()
    try {
      const status = ["GERADA", "ENVIADA", "PAGA", "CANCELADA"]
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error(`Error: Token Inválido!`)
      const search = `&status=${status[event.target.value]}`
      const {url, options} = GET_BILLINGS(token, paginate, search)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {billings} = await response.json()
      setData(billings.data)
      setPaginate({total:billings.total, perPage:billings.perPage, page:billings.page, lastpage:billings.lastpage})
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearch = async event =>{
    event.preventDefault()
    try {
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error(`Error: Token inválido!`)
      const search = `${event.target.nameorcnpj.value}`
      const {url, options} = GET_BILLINGS(token, paginate, search)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {billings} = await response.json()
      setData(billings.data)
      setPaginate({total:billings.total, perPage:billings.perPage, page:billings.page, lastpage:billings.lastpage})
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchToPeriod = async event =>{
    event.preventDefault()
    try{
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error(`Error: Token inválido!`)
      const search = `&start=${event.target.start_date.value}&end=${event.target.end_date.value}`
      const {url, options} = GET_BILLINGS(token, paginate,search)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {billings} = await response.json()
      setData(billings.data)
      setPaginate({total:billings.total, perPage:billings.perPage, page:billings.page, lastpage:billings.lastpage})
    }catch(error){
      console.log(error)
    }
  }

  const paginateUpdate =async event =>{
    try {
        const token = window.localStorage.getItem('token')
        paginate.page=event.target.id
        setPaginate(paginate)
        console.log(paginate)
        if(!token){
            throw new Error(`Error: Token inválido`)
        }
        const {url, options} = GET_BILLINGS(token, paginate)
        const response = await fetch(url, options)
        if(!response.ok) throw new Error(`Error: ${response.statusText}`)
        const {billings} = await response.json()
        setData(billings.data)
        
    } catch (error) {
        console.log(error)
    }
  }

  React.useEffect(()=>{
    getData()
  }, [])

    return (
        <>
        <Dialog 
          open={dialog}
          onClose={evt => {
            console.log(evt.detail.action);
            console.log()
            setDialog(false);
            
          }}
          onClosed={evt =>{
            setUrlPayment('')
            console.log(evt.detail.action)
          } }
          >
          <DialogTitle>Informe a url</DialogTitle>
          <form onSubmit={handleSendBilling}>
          <DialogContent>
            <TextField  outlined  className={"CustomInputSearch"} name="urlPayment" value={urlPayment} onChange={({target})=>setUrlPayment(target.value)} />  
          </DialogContent>
          <DialogActions>
            <DialogButton action="accept" isDefaultAction>
              Enviar
            </DialogButton>
          </DialogActions>
          </form>
        </Dialog>
        <MainNav/>
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Cobranças</Typography></h1>             
          </div>
            {loaded &&
            <div className={"loading"}> 
              <CircularProgress size={125} />
            </div>
            }
          { !loaded && <div>
            <Grid className={"CustomContainer"}>
            <GridRow>
                    <GridCell span={8}>                     
                      <Button className={"BtnDefaultTmenu"} label="Filtrar por Período" icon="event_note  " onClick={()=>{setShowperiod(!showperiod)}}/>                      
                      <SimpleMenu handle={<Button className={"BtnDefaultTmenu"} label="Filtrar por Status" icon="filter_list" />}>
                        <MenuItem value="0" onClick={handleSearchToStatus} >Gerada</MenuItem>
                        <MenuItem value="1" onClick={handleSearchToStatus}>Enviada</MenuItem>
                        <MenuItem value="2" onClick={handleSearchToStatus}>Paga</MenuItem>
                        <MenuItem value="3" onClick={handleSearchToStatus} >Cancelada</MenuItem>
                      </SimpleMenu>          
                      
                    </GridCell>
                    { showperiod &&
                      <GridCell>
                        <form onSubmit={handleSearchToPeriod}>
                      <TextField label="Data inicial" type="date" name="start_date"/><TextField label="Data final" type="date" name="end_date"/>
                      <Button label="Filtrar" outlined icon="search" className={"BtnDefaultSearch"} />  
                      </form>
                    </GridCell>}                    
                    <GridCell span={4}>
                      <form onSubmit={handleSearch}>                      
                        <TextField className={"CustomInputSearch"} outlined name="nameorcnpj"label="Buscar por Nome ou CNPJ..." />
                        <Button label="Pesquisar" outlined icon="search" className={"BtnDefaultSearch"}/>
                      </form>
                    </GridCell>
                </GridRow>       
            </Grid>

            <Grid className={"CustomContainer"}>
            <GridRow>
              <GridCell>
                <DataTable className={"TabelaProdutos"}>
                  <DataTableContent>
                    <DataTableHead>
                      <DataTableRow>
                        <DataTableHeadCell>Estabelecimento</DataTableHeadCell>                        
                        <DataTableHeadCell alignEnd>Referência</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Comandas</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Total da Fatura</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Ações</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Link</DataTableHeadCell>
                        <DataTableHeadCell alignEnd>Status</DataTableHeadCell>                     
                      </DataTableRow>
                    </DataTableHead>
                    <DataTableBody>
                    {data.map( billing =>{
                        return(
                          
                          <DataTableRow key={billing.id}>
                           
                      <DataTableCell><a href="/">{billing.name}</a></DataTableCell>
                      <DataTableCell alignEnd>{billing.description}</DataTableCell>
                      <DataTableCell alignEnd>{billing.cards}</DataTableCell>
                      <DataTableCell alignEnd className={"strong"}>R$ {billing.value}</DataTableCell>
                       <td>    
                       
                            
                        <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                          <MenuItem id={billing.id}  onClick={showDialog}>
                            Enviar               
                          </MenuItem>
                          <MenuItem id={billing.id}  value="1" onClick={updateStatus}>
                          Marcar como Paga
                          </MenuItem>
                          <MenuItem id={billing.id}  value="0" onClick={updateStatus}>
                          Marcar como Cancelada
                          </MenuItem>                            
                        </SimpleMenu>
                      </td>
                      <DataTableCell alignEnd><Button label="Fatura" icon="link" outlined type="button" /></DataTableCell>
                      <DataTableCell alignEnd>
                        { billing.status ==="GERADA" && 
                          <Badge className={"TmenuInProcess"} align="inline" label="Gerada" />
                        }
                        { billing.status ==="ENVIADA" && 
                          <Badge className={"TmenuInfo"} align="inline" label="Enviada" />
                        }
                        { billing.status ==="PAGA" && 
                          <Badge className={"TmenuSuccess"} align="inline" label="Paga" />
                        }
                        { billing.status ==="CANCELADA" && 
                          <Badge className={"TmenuDanger"} align="inline" label="Cancelada" />
                        }                                                                                
                      </DataTableCell>                        
                    </DataTableRow>
                        )
                      }
                    )
                      
                     } 
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
    )
}

export default ChargesIndex
