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
 } from "rmwc";
import MainNav from '../../MainNav'
import Pagination from '../Pagination/Pagination'
import { GET_USERS } from '../../api';
import { UsersContext } from '../../UsersContext';
const UsersIndex = () => {
  const { getData, paginate, data } = React.useContext(UsersContext);

 
    return (
        <>
        <MainNav/>
            <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Usuários</Typography></h1>             
          </div>
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
          <Pagination />
          </GridRow>
          </Grid>
          
        </div>
        
        </>
    )
}

export default UsersIndex;
