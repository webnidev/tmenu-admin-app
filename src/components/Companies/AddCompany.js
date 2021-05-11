import React from 'react'
import { Typography, TextField, Grid, GridRow, GridCell, Button, Switch } from "rmwc";
import MainNav from '../../MainNav'
const AddCompany = () => {
    return (
        <>
        <MainNav />
        <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">CADASTRO DE ESTABELECIMENTO</Typography></h1>             
          </div>
          <div className="formContainer">
          <Grid>            
            <GridRow>              
              <GridCell span={12}>
                  <GridCell span={6}><TextField fullwidth placeholder="Razão Social" /></GridCell>
                  <GridCell span={6}> <TextField fullwidth placeholder="CNPJ" /></GridCell>
                  <GridRow>
                    <GridCell span={6}> <TextField fullwidth placeholder="CEP" /></GridCell>                    
                    <GridCell span={6}> <TextField fullwidth placeholder="Endereço" /></GridCell>                    
                  </GridRow>
                  <GridRow>                    
                    <GridCell span={6}> <TextField fullwidth placeholder="Número" /></GridCell>
                    <GridCell span={6}> <TextField fullwidth placeholder="Complemento" /></GridCell>
                  </GridRow>
                  <GridRow>                    
                    <GridCell span={4}> <TextField fullwidth placeholder="Bairro" /></GridCell>
                    <GridCell span={4}> <TextField fullwidth placeholder="Cidade" /></GridCell>
                    <GridCell span={4}> <TextField fullwidth placeholder="UF" /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell span={6}><TextField fullwidth placeholder="Telefone do Estabelecimento" /></GridCell>
                    <GridCell span={6}><TextField fullwidth placeholder="Email" /></GridCell>
                  </GridRow>   
                  <GridRow>
                      <GridCell span={6}><TextField fullwidth placeholder="Nome do Responsável Contratante" /></GridCell>
                      <GridCell span={6}><TextField fullwidth placeholder="Celular do Responsável Contratante" /></GridCell>  
                  </GridRow>
                  <GridRow>
                    <GridCell span={12}> 
                    <Switch defaultChecked label="Ativar retirada de R$1 nos 10% do garçom em cada comanda fechada" />  
                    </GridCell>
                  </GridRow>
                  
                  <br/>
                    <GridRow>
                        <GridCell span={6}>  
                        <Button className={"BtnDefaultTmenu"} label="Salvar" icon="save" /> 
                        <Button className={""} label="Voltar" />     
                        </GridCell>                        
                    </GridRow>         
                  
                </GridCell>
            </GridRow>
           
       
          </Grid>
              
          </div>        
        </div>
        </>
    )
}

export default AddCompany
