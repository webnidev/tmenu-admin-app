import React from 'react';
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
import MainNav from '../../MainNav'
import Pagination from '../Pagination/Pagination'
import { GET_USERS } from '../../api';
import { UsersContext } from '../../UsersContext';
const UsersIndex = () => {
  const context = React.useContext(UsersContext)
  const { getData, paginate, data, paginateUpdate } = React.useContext(UsersContext);
  const [open, setOpen]= React.useState(false)
 const addUser = ()=>{
  window.location.href = "/add-user";
 }
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Usuários</Typography></h1>             
          </div>
          <Grid className={"CustomContainer"}>
            <GridRow>
                    <GridCell span={8}>
                      <Button onClick={addUser} className={"BtnDefaultTmenu"} label="Cadastrar Novo" icon="add" />     
                    </GridCell>                    
                    <GridCell span={4}>
                        <form onSubmit={""}>                      
                        <TextField className={"CustomInputSearch"} name="name" outlined label="Buscar por Nome ou CNPJ..." />
                        <Button label="Pesquisar" outlined icon="search" className={"BtnDefaultSearch"} type="submit"/>
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
                      <DataTableHeadCell>Código</DataTableHeadCell>
                        <DataTableHeadCell>Nome</DataTableHeadCell>
                        <DataTableHeadCell>Tipo de usuário</DataTableHeadCell>
                        <DataTableHeadCell>Email</DataTableHeadCell>
                        <DataTableHeadCell>CPF</DataTableHeadCell>
                        <DataTableHeadCell>Telefone</DataTableHeadCell>
                        <DataTableHeadCell>Data de cadastro</DataTableHeadCell>
                      </DataTableRow>
                    </DataTableHead>
                    <DataTableBody>
                  { data.map(user=>{
                    return(
                      <DataTableRow key={user.id}>
                      <DataTableCell>{user.id}</DataTableCell>  
                      <DataTableCell><a href="/">{user.name}</a></DataTableCell>
                      <DataTableCell>{user.roles[0].name}</DataTableCell>
                      <DataTableCell>{user.email}</DataTableCell>
                      <DataTableCell>{user.cpf}</DataTableCell>
                      <DataTableCell>{user.phone}</DataTableCell>
                      <DataTableCell>{user.created_at}</DataTableCell>
                      </DataTableRow>
                      )
                  })
                    
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
        
        </>
    )
}

export default UsersIndex;
