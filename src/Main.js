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

  render() {
    return (
      <div className="Chart">
        <VictoryChart 
        width={'700'}
        height = {'400'}
        animate={{ duration: 500}}
        theme={VictoryTheme.material}
          domainPadding= {30} >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
              <VictoryLine 
                data={this.state.data} 
                x={"quarter"} 
                y={"earnings"}/>
              <VictoryLine 
                data={this.state.data2} 
                x={"quarter"} 
                y={"earnings"}/>
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