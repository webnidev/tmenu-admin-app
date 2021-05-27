import React from 'react'
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
import MainNav from '../../MainNav';
import { GET_PLANS } from '../../api';

const TaxRulesIndex = () => {
  const [plans, setPlans] = React.useState([])
  const [add, setAdd] = React.useState(false)
  const getPlans =async ()=>{
    try {
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error('Error: Token inválido!')
      const {url, options} = GET_PLANS(token)
      const response = await fetch(url, options)
      if(!response.ok) throw new Error(`Error: ${response.statusText}`)
      const {plans} = await response.json()
      setPlans(plans)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(()=>{
    getPlans()
  },[])

    return (
        <>
          <MainNav />
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">Gestão de Taxas</Typography></h1>             
          </div>
          <Grid className={"CustomContainer"}>
              <GridRow>
                    <GridCell span={8}>
                      <Button onClick={()=>setAdd(true)} className={"BtnDefaultTmenu"} label="Cadastrar Taxa" icon="add" />     
                    </GridCell>                    
                </GridRow>
                <GridRow>
                  <GridCell>
                    <form></form>
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
                        <DataTableHeadCell>Tipo</DataTableHeadCell>
                        <DataTableHeadCell>Valor</DataTableHeadCell>
                        <DataTableHeadCell></DataTableHeadCell>
                      </DataTableRow>
                    </DataTableHead>
                    <DataTableBody>
                      {
                        plans.map(plan=>{
                          return(
                            <DataTableRow key={plan.id}>
                              <DataTableCell>{plan.id}</DataTableCell>
                              <DataTableCell>{plan.type}</DataTableCell>
                              <DataTableCell>$R {plan.value}</DataTableCell> 
                              <DataTableCell>
                                Editar  
                              </DataTableCell> 
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
        </>
    )
}

export default TaxRulesIndex
