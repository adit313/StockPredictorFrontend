import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    List,
    Card
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
    
    renderStocks = () => {
      return this.state.stocks.map(element => {
        return (
          <List.Item as='a'>
           <Button animated style={{width: 140, height: 45}} size="medium">
             <Button.Content visible>{element.name}</Button.Content>
             <Button.Content  hidden> <h5>{element.ticker}|{element.exchange}</h5> </Button.Content>
           </Button>
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
           })}]
          })))
    }
    
    render() {
      console.log(this.state)

      return (
                <div>
                    <Container text style={{ marginTop: '4em' }}>
                        <Header as='h1'>Your Portfolio</Header>
                                    <p>Portflio performance over time</p>
                    </Container>
              
                  <Container fluid style={{ margin: '0em' }}>
                  <Grid divided centered inverted stackable>
                        <Grid.Column width={2}>

                          <List link inverted>
                            {this.renderStocks()}
                            <List.Item as='a'>
                                <Button animated style={{width: 140, height: 45}}>
                                    <Button.Content visible>Add Stock</Button.Content>
                                    <Button.Content hidden> Add by Ticker </Button.Content>
                                </Button>
                            </List.Item>
                            
                            <List.Item as='a'>
                              <AddNewStock addStock={this.addToStocks} stocks={this.passStocksForSearch()}/>
                            </List.Item>
                          </List>
                        </Grid.Column>
                        <Grid.Column width={11}>
                                <Main stockData={this.state.stockData}/>
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