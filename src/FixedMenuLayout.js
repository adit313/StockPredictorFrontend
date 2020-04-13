import React from 'react'
import {
    Button,
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    Icon,
    Input,
    List,
    Menu,
    Segment,
  } from 'semantic-ui-react'
  import Main from './Main.js'
  import AddNewStock from './AddNewStock.js'
  
  export default class FixedMenuLayout extends React.Component{
    state = {visible: false}
    
    render() {
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
                            <List.Item as='a'>

                                <Button animated style={{width: 140, height: 45}} size="medium">
                                    <Button.Content visible>Amazon</Button.Content>
                                    <Button.Content  hidden> <h5>AMZN | 1863.45</h5> </Button.Content>
                                </Button>

                            </List.Item>
                            <List.Item as='a'>

                                <Button animated style={{width: 140, height: 45}} toggle >
                                    <Button.Content visible>Apple</Button.Content>
                                    <Button.Content hidden> AAPL | 363.45</Button.Content>
                                </Button>

                            </List.Item>
                            <List.Item as='a'>

                                <Button animated style={{width: 140, height: 45}}>
                                    <Button.Content visible>Google</Button.Content>
                                    <Button.Content hidden> GOOG | 1063.45</Button.Content>
                                </Button>

                            </List.Item>

                            <List.Item as='a'>

                                <Button animated style={{width: 140, height: 45}}>
                                    <Button.Content visible>Add Stock</Button.Content>
                                    <Button.Content hidden> Add by Ticker </Button.Content>
                                </Button>
                            </List.Item>
                            <List.Item as='a'>
                              <AddNewStock/>
                            </List.Item>
                          </List>
                        </Grid.Column>
                        <Grid.Column width={12}>
                                <Main/>
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