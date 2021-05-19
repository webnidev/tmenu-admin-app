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
  DialogButton 
} from "rmwc";

import { GET_BILLINGS } from '../../api';

const ChargesIndex = () => {
  const [data, setData] = React.useState([])
  const [paginate, setPaginate] = React.useState({total:0, perPage:5, page:1, lastpage:0})
  const [dialog, setDialog] = React.useState(false);

  const getData = async ()=>{
    const token = window.localStorage.getItem('token')
    if(!token){
      throw new Error(`Error: ${response.statusText}`)
    }
      const { url, options } = GET_BILLINGS(token,paginate)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {billings} = await response.json()
      setData(billings.data)
      setPaginate({total:billings.total, perPage:billings.perPage, page:billings.page, lastpage:billings.lastpage})
  }

  const handleSendBilling = async event =>{
    event.preventDefault()
    console.log(event.target.url.value)
    console.log(event.target.billing_id.value)
  }

  React.useEffect(()=>{
    getData()
  }, [])

    return (
        <>
        <MainNav/>
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Cobranças</Typography></h1>             
          </div>

            <Grid className={"CustomContainer"}>
            <GridRow>
                    <GridCell span={8}>                     
                      <Button className={"BtnDefaultTmenu"} label="Filtrar por Período" icon="event_note  " />                      
                      <SimpleMenu handle={<Button className={"BtnDefaultTmenu"} label="Filtrar por Status" icon="filter_list" />}>
                        <MenuItem>Gerada</MenuItem>
                        <MenuItem>Enviada</MenuItem>
                        <MenuItem>Paga</MenuItem>
                        <MenuItem>Cancelada</MenuItem>
                      </SimpleMenu>          
                      
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
                         <Dialog open={dialog} onClose={event =>{
                           console.log(event.detail.action);
                           setDialog(false)
                         }}
                         onClosed={event => console.log(event.detail.action)}
                         >  
                            <DialogTitle>Informe a url de pagamento</DialogTitle>
                            
                            <DialogContent>
                              <TextField  name="url" id={billing.name} className={"CustomInputSearch"} outlined/>
                              <TextField  name="billing_id" value={billing.name} type="hidden"/>
                            </DialogContent>
                            <DialogActions>
                            <DialogButton action="close">Cancelar</DialogButton>
                            <DialogButton action="confirm" isDefaultAction onClick={handleSendBilling}>
                              Enviar
                            </DialogButton>    
                            
                            </DialogActions>
                          </Dialog>                
                        <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                          <MenuItem onClick={() => setDialog(true)}>Enviar</MenuItem>
                          <MenuItem>Marcar como Paga</MenuItem>
                          <MenuItem>Marcar como Cancelada</MenuItem>                            
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
            </Grid>


        </div> 
        </>
    )
}

export default ChargesIndex
