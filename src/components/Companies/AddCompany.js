import React from 'react'
import { Typography, TextField, Grid, GridRow, GridCell, Button, Switch } from "rmwc";
import MainNav from '../../MainNav'
import { CREATE_COMPANY } from '../../api'

const AddCompany = () => {

    const getBody=(target)=>{
      return{
        "company":{
          "name": target.name.value,
          "email": target.email.value,
          "cnpj": target.cnpj.value,
          "phone":target.phone.value
        },
        "address":{
          "zipcode":target.zipcode.value,
			    "street":target.street.value,
          "number":target.number.value,
          "district":target.district.value,
          "city":target.city.value,
          "state":target.state.value,
          "complement":target.complement.value
        },
        "responsible":{
            "responsible":target.responsible.value,
            "responsible_phone":target.responsible_phone
          },
	      "waiter_rate":target.waiter_rate.value
      }
    }
    const handleSubmit = async event =>{
      event.preventDefault()
      const token = window.localStorage.getItem('token')
      if(!token) throw new Error(`Error: token inválido`)
      const body = getBody(event.target)
      //const {url, options} = CREATE_COMPANY(token, body)
      //const response = await fetch(url, options)
      //if(!response) throw new Error(`Error: ${response.statusText}`)
      //const {company} = await response.json() 
      console.log(body)     
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
                      <GridCell span={6}><TextField fullwidth placeholder="Confirme senha" name="password_confirm" type="password"/></GridCell>  
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
