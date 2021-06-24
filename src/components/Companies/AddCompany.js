import React from 'react'
import { Typography, TextField, Grid, GridRow, GridCell, Button, Switch } from "rmwc";
import MainNav from '../../MainNav'
import { CREATE_COMPANY } from '../../api'
import { useNavigate } from 'react-router-dom';

const AddCompany = () => {
  const navigate = useNavigate();
    
    const handleSubmit = async event =>{
      event.preventDefault()
      try {
        const token = window.localStorage.getItem('token')
        if(!token) throw new Error(`Error: token inválido`)
        const {url, options} = CREATE_COMPANY(token, event.target)
        const response = await fetch(url, options)
        console.log(response)
        if(!response.ok) throw new Error(`Error: ${response.statusText}`)
        navigate('/companies')
        //const {company} = await response.json() 
      } catch (error) {
        console.log(error)
      } 
    }

    return (
        <>
        <MainNav />
        <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">CADASTRO DE ESTABELECIMENTO</Typography></h1>             
          </div>
          <form onSubmit={handleSubmit}>
          <div className="formContainer">
          <Grid> 
                     
            <GridRow>              
              <GridCell span={12}>
                  <GridCell span={6}><TextField fullwidth placeholder="Razão Social" name="name" /></GridCell>
                  <GridCell span={6}> <TextField fullwidth placeholder="CNPJ" name="cnpj" /></GridCell>
                  <GridRow>
                    <GridCell span={6}> <TextField fullwidth placeholder="CEP" name="zipcode" /></GridCell>                    
                    <GridCell span={6}> <TextField fullwidth placeholder="Endereço" name="street"/></GridCell>                    
                  </GridRow>
                  <GridRow>                    
                    <GridCell span={6}> <TextField fullwidth placeholder="Número" name="number" /></GridCell>
                    <GridCell span={6}> <TextField fullwidth placeholder="Complemento" name="complement" /></GridCell>
                  </GridRow>
                  <GridRow>                    
                    <GridCell span={4}> <TextField fullwidth placeholder="Bairro" name="district" /></GridCell>
                    <GridCell span={4}> <TextField fullwidth placeholder="Cidade" name="city" /></GridCell>
                    <GridCell span={4}> <TextField fullwidth placeholder="UF" name="state" /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell span={6}><TextField fullwidth placeholder="Telefone do Estabelecimento" name="phone" /></GridCell>
                    <GridCell span={6}><TextField fullwidth placeholder="Email" name="email" /></GridCell>
                  </GridRow>   
                  <GridRow>
                      <GridCell span={6}><TextField fullwidth placeholder="Nome do Responsável Contratante" name="responsible" /></GridCell>
                      <GridCell span={6}><TextField fullwidth placeholder="Celular do Responsável Contratante" name="responsible_phone" /></GridCell>  
                  </GridRow>
                  <GridRow>
                      <GridCell span={6}><TextField fullwidth placeholder="Senha" name="password" type="password"/></GridCell>
                      <GridCell span={6}><TextField fullwidth placeholder="Confirme a senha" name="password_confirm" type="password"/></GridCell>  
                  </GridRow>
                  <GridRow>
                    <GridCell span={12}> 
                    <Switch defaultChecked label="Ativar retirada de R$1 nos 10% do garçom em cada comanda fechada" name="waiter_rate" />  
                    </GridCell>
                  </GridRow>
                  
                  <br/>
                    <GridRow>
                        <GridCell span={6}>  
                        <Button className={"BtnDefaultTmenu"} label="Salvar" icon="save" /> 
                        <Button className={""} onClick={()=>{window.history.back()}} label="Voltar" />     
                        </GridCell>                        
                    </GridRow>         
                  
                </GridCell>
            </GridRow>
           
            
          </Grid>
              
          </div>
          </form>        
        </div>
        </>
    )
}

export default AddCompany
