import React from "react";
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


const CompaniesIndex = () => {

function cadastrarNovo(){
  window.location.href = "/add-company";
}
//   const [status, setStatus] = React.useState(false);

  return (
    <>          
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
                      <DataTableRow>
                        <DataTableCell><a href="">Hamburgueria do Zezim</a></DataTableCell>
                        <DataTableCell alignEnd>00.000.000/0001-01</DataTableCell>
                        <DataTableCell alignEnd>(86) 9 0000-0000</DataTableCell>
                        <SimpleMenu handle={<IconButton icon="zoom_in"/>}>
                            <MenuItem><Icon icon={{ icon: 'info', size: 'small' }} /> Ver Detalhes</MenuItem>                            
                            <MenuItem><Icon icon={{ icon: 'open_in_new', size: 'small' }} /> Logar</MenuItem>
                          </SimpleMenu>
                        <DataTableCell alignEnd>                           
                              <Badge className={"TmenuSuccess"} align="inline" label="Ativo" />                                                                            
                        </DataTableCell>
                        <SimpleMenu handle={<IconButton icon="keyboard_arrow_down" label="Aterar status" />}>
                                <MenuItem>Atualizar para:  <strong className="TmenuSuccessText"> Ativo</strong></MenuItem>
                                <MenuItem>Atualizar para:  <strong className="TmenuDangerText"> Inativo</strong></MenuItem>                                
                        </SimpleMenu>  
                      </DataTableRow>
                      <DataTableRow>
                        <DataTableCell><a href="">Picanharia do Gaúcho</a></DataTableCell>
                        <DataTableCell alignEnd>00.000.000/0001-01</DataTableCell>
                        <DataTableCell alignEnd>(86) 9 0000-0000</DataTableCell>
                          <SimpleMenu handle={<IconButton icon="zoom_in"/>}>
                            <MenuItem><Icon icon={{ icon: 'info', size: 'small' }} /> Ver Detalhes</MenuItem>
                            <MenuItem><Icon icon={{ icon: 'open_in_new', size: 'small' }} /> Logar</MenuItem>
                          </SimpleMenu> 
                        <DataTableCell alignEnd><Badge className={"TmenuDanger"} align="inline" label="Inativo" /></DataTableCell>
                        <SimpleMenu handle={<IconButton icon="keyboard_arrow_down" label="Aterar status" />}>
                                <MenuItem>Atualizar para:  <strong className="TmenuSuccessText"> Ativo</strong></MenuItem>
                                <MenuItem>Atualizar para:  <strong className="TmenuDangerText"> Inativo</strong></MenuItem>
                                
                              </SimpleMenu>  
                      </DataTableRow>
                      <DataTableRow>
                        <DataTableCell><a href="">Outback</a></DataTableCell>
                        <DataTableCell alignEnd>00.000.000/0001-01</DataTableCell>
                        <DataTableCell alignEnd>(86) 9 0000-0000</DataTableCell>
                          <SimpleMenu handle={<IconButton icon="zoom_in"/>}>
                            <MenuItem><Icon icon={{ icon: 'info', size: 'small' }} /> Ver Detalhes</MenuItem>
                            <MenuItem><Icon icon={{ icon: 'open_in_new', size: 'small' }} /> Logar</MenuItem>
                          </SimpleMenu> 
                        <DataTableCell alignEnd><Badge className={"TmenuSuccess"} align="inline" label="Ativo" /></DataTableCell>
                              <SimpleMenu handle={<IconButton icon="keyboard_arrow_down" label="Aterar status" />}>
                                <MenuItem>Atualizar para:  <strong className="TmenuSuccessText"> Ativo</strong></MenuItem>
                                <MenuItem>Atualizar para:  <strong className="TmenuDangerText"> Inativo</strong></MenuItem>                                
                              </SimpleMenu>  
                      </DataTableRow>                      
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
