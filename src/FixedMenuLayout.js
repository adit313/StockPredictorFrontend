import React from 'react'
import {
    Button,
    Container,
    Grid,
    Header,
    List
  } from 'semantic-ui-react'
  import Main from './Main.js'
  import AddNewStock from './AddNewStock.js'
  
  export default class FixedMenuLayout extends React.Component{
    state = {
      visible: false,
      stocks: [],
      displayStocks: [],
      allStocks: []
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
    }
    
    render() {
      console.log(this.state)

      return (
                <div>
                    <Container text style={{ marginTop: '4em' }}>
                        <Header as='h1'>Your Portfolio</Header>
                                    <p>Portflio performance over time</p>
                    </Container>
              
                  <Container fluid style={{ marginTop: '0em' }}>
                  <Grid divided inverted stackable>
                        <Grid.Column width={2}>
                          <Header style={{ marginTop: '4em' }} inverted as='h4' content='Group 1' />

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
                        <Grid.Column width={12}>
                                <Main stocks={this.state.stocks}/>
                        </Grid.Column>
                        <Grid.Column width={1}>
                            <Header style={{ marginTop: '4em' }} inverted as='h4' content='Group 1' />
                            <List link inverted>
                                <List.Item as='a'>
                                    <Button animated style={{width: 140, height: 45}}>
                                        <Button.Content visible>Split</Button.Content>
                                        <Button.Content hidden> Sum </Button.Content>
                                    </Button>
                                </List.Item>
                            </List>
                        </Grid.Column>
                      </Grid>
                  </Container>


                </div>
              )  
      }
    }