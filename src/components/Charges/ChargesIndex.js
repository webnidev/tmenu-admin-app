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
  TextField
} from "rmwc";

const ChargesIndex = () => {
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
                      <DataTableRow>
                        <DataTableCell><a href="/">Côco Bambú Teresina</a></DataTableCell>
                        <DataTableCell alignEnd>Fatura 02 - Janeiro 2021</DataTableCell>
                        <DataTableCell alignEnd>891</DataTableCell>
                        <DataTableCell alignEnd className={"strong"}>R$ 3982</DataTableCell>
                         <td>                        
                          <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                            <MenuItem>Enviar</MenuItem>
                            <MenuItem>Marcar como Paga</MenuItem>
                            <MenuItem>Marcar como Cancelada</MenuItem>                            
                          </SimpleMenu>
                        </td>
                        <DataTableCell alignEnd><Button label="Fatura" icon="link" outlined /></DataTableCell>
                        <DataTableCell alignEnd>                           
                              <Badge className={"TmenuInProcess"} align="inline" label="Gerada" />                                                                            
                        </DataTableCell>                        
                      </DataTableRow>
                      <DataTableRow>
                        <DataTableCell><a href="/">Morgan Sushi</a></DataTableCell>
                        <DataTableCell alignEnd>Fatura 01 - Janeiro 2021</DataTableCell>
                        <DataTableCell alignEnd>981</DataTableCell>
                        <DataTableCell alignEnd className={"strong"}>R$ 8761</DataTableCell>
                        <td>                        
                          <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                            <MenuItem>Enviar</MenuItem>
                            <MenuItem>Marcar como Paga</MenuItem>
                            <MenuItem>Marcar como Cancelada</MenuItem>                            
                          </SimpleMenu>
                        </td>
                        <DataTableCell alignEnd><Button label="Fatura" icon="link" outlined /></DataTableCell>
                        <DataTableCell alignEnd><Badge className={"TmenuInfo"} align="inline" label="Enviada" /></DataTableCell>
                      </DataTableRow>
                        <DataTableRow>
                          <DataTableCell><a href="/">Fogo Campeiro The</a></DataTableCell>
                          <DataTableCell alignEnd>Fatura 02 - Dezembro 2020</DataTableCell>
                          <DataTableCell alignEnd>1821</DataTableCell>
                          <DataTableCell alignEnd className={"strong"}>R$ 8172</DataTableCell>
                          <td>                        
                          <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                            <MenuItem>Enviar</MenuItem>
                            <MenuItem>Marcar como Paga</MenuItem>
                            <MenuItem>Marcar como Cancelada</MenuItem>                            
                          </SimpleMenu>
                        </td>
                        <DataTableCell alignEnd><Button label="Fatura" icon="link" outlined /></DataTableCell>                    
                          <DataTableCell alignEnd><Badge className={"TmenuSuccess"} align="inline" label="Paga" /></DataTableCell>                             
                      </DataTableRow>
                      <DataTableRow>
                          <DataTableCell><a href="/">Deck Dirceu</a></DataTableCell>
                          <DataTableCell alignEnd>Fatura 02 - Dezembro 2020</DataTableCell>
                          <DataTableCell alignEnd>1921</DataTableCell>
                          <DataTableCell alignEnd className={"strong"}>R$ 9872</DataTableCell>
                          <td>                        
                          <SimpleMenu handle={<Button label="Selecione" icon="expand_more" />}>
                            <MenuItem>Enviar</MenuItem>
                            <MenuItem>Marcar como Paga</MenuItem>
                            <MenuItem>Marcar como Cancelada</MenuItem>                            
                          </SimpleMenu>
                        </td>
                        <DataTableCell alignEnd><Button label="Fatura" icon="link" outlined /></DataTableCell>                
                          <DataTableCell alignEnd><Badge className={"TmenuDanger"} align="inline" label="Cancelada" /></DataTableCell>                             
                      </DataTableRow>                        
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
