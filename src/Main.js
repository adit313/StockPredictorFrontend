import React from 'react';
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryZoomContainer, VictoryBrushContainer,VictoryTooltip }from 'victory';
import { updateStatement } from 'typescript';



export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  renderStocks = () => {
    this.props.stockData.forEach(stock => {
      stock.prices.forEach(line => {
        line.date = new Date(line.date)
      })
    })
      return this.props.stockData.map(stock => {
        return (
                <VictoryLine 
                labels={() => stock.ticker}
                labelComponent={<VictoryTooltip/>}
                data={stock.prices}
                name={stock.ticker}
                x={"date"} 
                y={"price"}/>
        )
      })
    }

    renderPredictions = () => {
      this.props.stockData.forEach(stock => {
        stock.predictedPrices.forEach(line => {
          line.date = new Date(line.date)
        })
      })
        return this.props.stockData.map(stock => {
          return (
                  <VictoryLine 
                  style={{ data: { stroke: 'red', strokeDasharray: [1, 2] } }} 
                  labels={() => stock.ticker}
                  labelComponent={<VictoryTooltip/>}
                  data={stock.predictedPrices}
                  name={stock.ticker}
                  x={"date"} 
                  y={"price"}/>
          )
        })
      }

  render() {
    this.props.stockData[0]? console.log(typeof this.props.stockData[0].prices[0].date) : console.log("blah")
    return (        
    <div>
      <VictoryChart width={1000} height={500} scale={{x: "time"}} animate={{ duration: 500}}
        containerComponent={
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
            zoomDomain={this.state.zoomDomain}
            onZoomDomainChange={this.handleZoom.bind(this)}
          />
        }
      >
        {this.renderStocks()}
        {this.renderPredictions()}

      </VictoryChart>

      <VictoryChart
        padding={{top: 0, left: 50, right: 50, bottom: 30}}
        animate={{ duration: 2000}}
        width={1000} height={90} scale={{x: "time"}}
        containerComponent={
          <VictoryBrushContainer responsive={false}
            brushDimension="x"
            brushDomain={this.state.selectedDomain}
            onBrushDomainChange={this.handleBrush.bind(this)}
          />
        }
      >
        <VictoryAxis
          tickValues={[
            // new Date(1985, 1, 1),
            // new Date(1990, 1, 1),
            // new Date(1995, 1, 1),
            // new Date(2000, 1, 1),
            // new Date(2005, 1, 1),
            // new Date(2010, 1, 1),
            new Date(2015, 1, 1),
            new Date(2020, 1, 1)
          ]}
          tickFormat={(x) => new Date(x).getFullYear()}
        />
        {this.renderStocks()}
        {this.renderPredictions()}
      </VictoryChart>
  </div>

    );
  }
}