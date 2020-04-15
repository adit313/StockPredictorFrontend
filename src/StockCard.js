import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class StockCard extends React.Component {

    state= {
        wiki: {},
        wikiImg: {}
    }

    desc = () => {
        try {
            return this.state.wiki.query.pages[Object.keys(this.state.wiki.query.pages)[0]].extract
        } catch (error) {
            return null
        }
    }

    thumbimg = () => {
        try {
            return this.state.wikiImg.query.pages[Object.keys(this.state.wikiImg.query.pages)[0]].thumbnail.source
        } catch (error) {
            return null
        }
    }

    componentDidMount() {
        console.log(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&explaintext&redirects=1&titles=${this.props.stock.name.trim().replace(/\s/g, '%20')}`)
        fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&explaintext&redirects=1&titles=${this.props.stock.name.trim().replace(/\s/g, '%20')}&origin=*`)
        .then(resp => resp.json())
        .then(data => this.setState({wiki: data}))
        fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&explaintext&redirects=1&titles=${this.props.stock.name.trim().replace(/\s/g, '%20')}&origin=*&prop=pageimages`)
        .then(resp => resp.json())
        .then(data => this.setState({wikiImg: data}))
    }
    
    render() {
        if (this.state.wiki === {}) {
            return null
        } else {
            return( 
                <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src={this.thumbimg()}
                        />
                        <Card.Header>{this.props.stock.name}</Card.Header>
                        <Card.Meta>{this.props.stock.ticker} | <Icon name='chart line' /> {this.props.stock.exchange}</Card.Meta>
                        <Card.Description>
                            {this.desc()}
                        </Card.Description>
                    </Card.Content>
                </Card>
            )
        }
        }
    }



