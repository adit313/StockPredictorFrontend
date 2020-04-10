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
  
  const FixedMenuLayout = () => (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            Stock Puppies
          </Menu.Item>
          <Menu.Item as='a'>Login</Menu.Item>
        </Container>
      </Menu>

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

                    <Button animated size="medium">
                        <Button.Content visible>Amazon</Button.Content>
                        <Button.Content  hidden> <h5>AMZN</h5> </Button.Content>
                    </Button>

                </List.Item>
                <List.Item as='a'>

                    <Button animated toggle >
                        <Button.Content visible>Apple</Button.Content>
                        <Button.Content hidden> AAPL </Button.Content>
                    </Button>

                </List.Item>
                <List.Item as='a'>

                    <Button animated>
                        <Button.Content visible>Google</Button.Content>
                        <Button.Content hidden> GOOG</Button.Content>
                    </Button>

                </List.Item>

                <List.Item as='a'>

                    <Button animated>
                        <Button.Content visible>Add Stock</Button.Content>
                        <Button.Content hidden> <Input style={{ marginLeft: '4px', marginBottom: '7px', color: "white"}} transparent placeholder='Ticker' /> </Button.Content>
                    </Button>

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
                        <Button animated>
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
  
  export default FixedMenuLayout
  