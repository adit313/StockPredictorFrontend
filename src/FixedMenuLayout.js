import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    List,
    Card,
    Modal,
    Image,
  } from 'semantic-ui-react'
  import Main from './Main.js'
  import AddNewStock from './AddNewStock.js'
  import StockCard from './StockCard.js'
  
  export default class FixedMenuLayout extends React.Component{
    state = {
      visible: false,
      stocks: [],
      displayStocks: [],
      allStocks: [],
      stockData: []
    }

    componentDidMount() {
      fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(data => this.setState({allStocks: data}))
    }

    passStocksForSearch = () =>{
      let searchStocks = this.state.allStocks
      if (searchStocks) {
        searchStocks.forEach(element => {
          element.title = element.ticker + " | " + element.name
        });     
      }
      return searchStocks
    }

    renderCards = () => {
      return this.state.stocks.map(element => {
        return (
          <List.Item as='a'>
            <StockCard stock={element}/>
          </List.Item>
        )
      })
    }

    addToStockData = (ticker) => {
      
    }
    
    renderStocks = () => {
      return this.state.stocks.map(element => {
        return (
          <List.Item as='a'>
           <Button animated style={{width: 180, height: 45}} size="medium">
             <Button.Content visible>{element.name}</Button.Content>
             <Button.Content  hidden> <h5>{element.ticker}|{element.exchange}</h5> </Button.Content>
           </Button>
          </List.Item>
        )
      })
    }

    renderStockList = () => {
      return this.state.stocks.map(element => {
        return (
          <List.Item as='a'>
            {element.name} | {element.ticker} | {element.exchange}
          </List.Item>
        )
      })
    }


    addToStocks = (newStock) => {
        this.setState(prevState => ({
          stocks: [...(prevState.stocks || []), newStock]
          }));
        fetch(`http://localhost:3000/stocks/${newStock.ticker}`)
        .then(resp => resp.json())
        .then(data=> this.setState(prevState => ({
          stockData: [...(prevState.stockData || []), {ticker: newStock.ticker, prices: data.historical_data.filter(function (value, index, ar) {
            return (index % 10 === 0 && Date.parse(value.date) > Date.parse("2015-01-01"));
           }), predictedPrices: data.prediction_data.predicted_prices
          }]
          })))
    }
    
    render() {
      console.log(this.state.stockData.length)

      return (
                <div>
                    <Container text style={{ marginTop: '4em' }}>
                        <Header as='h1'>Your Portfolio</Header>
                                    <p>Portflio performance over time</p>
                    </Container>
              
                  <Container fluid style={{ margin: '0em' }}>
                  <Grid divided centered>
                        <Grid.Column width={2}>
                          <List link inverted>
                            {this.renderStocks()}
                            <List.Item as='a'>
                            <Modal trigger={
                                <Button animated style={{width: 180, height: 45}} size="medium">
                                  <Button.Content visible>Add New Stock</Button.Content>
                                  <Button.Content  hidden> <h5>Add By Ticker</h5> </Button.Content>
                              </Button>
                            }
                            closeIcon
                            >
                                <Modal.Header>Add New Stocks to Track</Modal.Header>
                                <Modal.Content image>
                                  <Image wrapped size='medium' src='https://static.wixstatic.com/media/f6761e_a4706da9b4474d0f9b7dcbc0e028ff92~mv2.png/v1/fill/w_481,h_551,al_c,q_85,usm_0.66_1.00_0.01/Marketplace%20Investor%20Side.webp' />
                                  <Modal.Description>
                                    <Header>Add Stock by Ticker</Header>
                                    <p>
                                      We have over 8,000 stocks in our database, covering the entirety of the NASDAQ and NYSE, feel free to search thorugh by Ticker Symbol.
                                    </p>
                                    <p><AddNewStock addStock={this.addToStocks} stocks={this.passStocksForSearch()}/></p>
                                    <p>
                                      <List>
                                        {this.renderStockList()}  
                                      </List>  
                                    </p>
                                  </Modal.Description>
                                </Modal.Content>
                              </Modal>
                            </List.Item>
                            
                            <List.Item as='a'>
                            </List.Item>
                          </List>
                        </Grid.Column>
                        <Grid.Column width={11}>
                                {this.state.stockData.length === 0 ? null : <Main stockData={this.state.stockData}/>}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <List link inverted>
                              <Card.Group centered> 
                                {this.renderCards()}
                              </Card.Group>
                            </List>
                        </Grid.Column>
                      </Grid>
                  </Container>
                </div>
              )  
      }
    }