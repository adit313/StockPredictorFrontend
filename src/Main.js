import React from 'react';
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme }from 'victory';



export default class Main extends React.Component {

  state={
    data: [
      {quarter: 1, earnings: 13000},
      {quarter: 2, earnings: 16500},
      {quarter: 3, earnings: 14250},
      {quarter: 4, earnings: 19000}
    ],
    data2: [
      {quarter: 1, earnings: 13000},
      {quarter: 2, earnings: 16500},
      {quarter: 3, earnings: 14250},
      {quarter: 4, earnings: 19000}
    ]
  }

  changeState = () => {
    this.setState({data: [
      {quarter: 1, earnings: 30000*Math.random()},
      {quarter: 2, earnings: 30000*Math.random()},
      {quarter: 3, earnings: 30000*Math.random()},
      {quarter: 4, earnings: 30000*Math.random()}
    ]})
  }

  fetchStockData = async (stock) => {
    let response = await fetch(`http://localhost:3000/stocks/${stock.ticker}`)
    let stockData = await response.json()
    return stockData
  }

  renderSingleStock = (stock) =>{
    let stockData = this.fetchStockData(stock)
    return(
      <VictoryLine 
                data={stockData.historical_data} 
                x={"date"} 
                y={"price"}/>
    )
  }

  renderStocks = () => {
    let result = []
    if (this.props.stocks) {
      this.props.stocks.forEach(element => {
        return result.push(this.renderSingleStock(element))
      })
    }
    console.log(result)
    return result
  }

  render() {
    console.log(this.props)
    return (
      <div className="Chart">
        <VictoryChart 
        width={700}
        height = {'400'}
        animate={{ duration: 500}}
        theme={VictoryTheme.material}
          domainPadding= {30} >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
              {this.props.stocks ? this.renderStocks() : null}
        </VictoryChart>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <button icon="like" onClick={this.changeState}>Change</button>
      </div>
    );
  }
}