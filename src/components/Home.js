import React from 'react';
import { Grid, GridCell, Card, Typography, Icon,CircularProgress  } from "rmwc";
import { GET_STATISTIC_COMPAMPANIES } from '../api'
import MainNav from '../MainNav'
const Home = () => {
  const [data, setData] = React.useState([{companies:''},{cards:''},{itens:''}])
  const [loaded, setLoaded] = React.useState(true)
  const getData = async ()=>{
   try {
    const token = window.localStorage.getItem('token')
    if(!token) throw new Error(`Error: Token inválido!`)
    const {url, options} = GET_STATISTIC_COMPAMPANIES(token)
    const response = await fetch(url, options)
    if(!response.ok) throw new Error(`Error: ${response.statusText}`)
    const {data} = await response.json()
    setData(data)
   } catch (error) {
    console.log(error)     
   }
   finally{
     setLoaded(false)
   }
  }

  React.useEffect(()=>{
    getData()
  },[])
    return (
      <>
          <MainNav/>
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">PAINEL</Typography></h1>             
          </div>
          {loaded &&
           <div className={"loading"}> 
          <CircularProgress size={125} />
          </div>
          }
          { !loaded && <Grid className={"CardsHome"} z={1}>
              <GridCell>
                <Card>
                  <Icon icon={{ icon: 'view_comfy', size: 'xlarge' }} style={{ color: '#16A104'}} />
                  <span className={"CardsHomeTitle"}>ESTABELECIMENTOS ATIVOS</span>
                  <span className={"CardsHomeValue"} style={{ color: '#16A104'}}>{data[0].companies}</span>
                </Card>
              </GridCell>
              <GridCell>
                <Card>
                  <Icon icon={{ icon: 'receipt_long', size: 'xlarge' }} style={{ color: '#169FFF'}} />
                  <span className={"CardsHomeTitle"}>TOTAL DE COMANDAS FATURADAS</span>
                  <span className={"CardsHomeValue"} style={{ color: '#169FFF'}}>{data[1].cards}</span>
                </Card>
              </GridCell>
              <GridCell>
                <Card>
                <Icon icon={{ icon: 'shopping_cart', size: 'xlarge' }} style={{ color: '#FF144F'}} />
                  <span className={"CardsHomeTitle"}>TOTAL DE PEDIDOS REALIZADOS</span>
                  <span className={"CardsHomeValue"} style={{ color: '#FF144F'}}>{data[2].itens}</span>
                </Card>
              </GridCell>            
            </Grid>}
        </div>
        </>
    )
}

export default Home
