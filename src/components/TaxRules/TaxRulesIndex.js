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
  DialogButton,
  CircularProgress
} from "rmwc";
import MainNav from '../../MainNav';
import { GET_PLANS } from '../../api';

const TaxRulesIndex = () => {
  const [plans, setPlans] = React.useState([])
  const [add, setAdd] = React.useState(false)
  const [loaded, setLoaded] = React.useState(true)
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
    finally{
      setLoaded(false)
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
            
          
            {loaded && <div className={"loading"}>  <CircularProgress size={125} /></div>}
          
            
          
        { !loaded && 
          <div>
          <Grid className={"CustomContainer"}>
              <GridRow>
                    <GridCell span={6}>
                      <Button onClick={()=>setAdd(!add)} className={"BtnDefaultTmenu"} label="Cadastrar Taxa" icon="add" />     
                    </GridCell>                    
                </GridRow>
          </Grid>

                { add && 
                <form>
                  <div className="formContainer">
              <Grid>    
                <GridRow>
                  <GridCell span={12}>
                    
                      <GridCell span={3}>
                        <TextField fullwidth placeholder="Type" name="type" />
                      </GridCell>
                      <GridCell span={3}>
                        <TextField fullwidth placeholder="Valor" name="value" />
                      </GridCell>
                      

                    
                  </GridCell>
                </GridRow>
                </Grid>
                </div>
                </form>
                }       
            
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
          }
        </div> 
      </>
    )
}

export default TaxRulesIndex
