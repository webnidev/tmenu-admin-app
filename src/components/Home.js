import React, {useState, useEffect} from 'react';
import { Grid, GridCell, Card, Typography, Icon } from "rmwc";
import  { loadData } from '../connect/load_data'
import MainNav from '../MainNav'
const Home = () => {

  //const [companies, setCompanies] = useState(null)
  //const [cards, setCards] = useState(null)
  //const [itens, setItens] = useState(null)
  const [data, setData] = useState([{companies:''},{cards:''},{itens:''}])

  const getData = async ()=>{
    //const  {companies, cards, itens}  = await loadData()
    const data = await loadData()
    console.log(data)
    //setCompanies(companies)
    //setCards(cards)
    //setItens(itens)
    setData(data)
  }

  useEffect(()=>{
    getData()
  },[])

    return (
        <>
          <MainNav/>
          <div className={"PageContainer"}>
          <div className={"PageTitle"}>        
            <h1><Typography use="headline1">PAINEL</Typography></h1>             
          </div>
          <Grid className={"CardsHome"} z={1}>
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
            </Grid>
        </div>
        </>
    )
}

export default Home
