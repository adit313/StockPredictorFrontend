import PropTypes from 'prop-types'
import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Label, Card } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const resultRenderer = ({ stock }) => {
  console.log(stock)
return <Label content={stock} />
}

resultRenderer.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  exchange: PropTypes.string,
}


export default class SearchExampleStandard extends Component {
  state = { 
    isLoading: false, 
    results: [], 
    value: '' , 
    source: []
  }

  componentDidMount() {
    this.setState({source: this.props.stocks})
  }
  
  handleResultSelect = (e, { result }) => {
    console.log(result)
    this.props.addStock(result)
    this.setState({ value: "" })
  }
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.ticker)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.stocks, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
    )
  }
}
