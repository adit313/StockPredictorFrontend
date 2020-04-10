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

                    <Button animated>
                        <Button.Content visible>AMZN</Button.Content>
                        <Button.Content hidden> $1846.84 </Button.Content>
                    </Button>

                </List.Item>
                <List.Item as='a'>

                    <Button animated>
                        <Button.Content visible>AAPL</Button.Content>
                        <Button.Content hidden> $130.63 </Button.Content>
                    </Button>

                </List.Item>
                <List.Item as='a'>

                    <Button animated>
                        <Button.Content visible>GOOG</Button.Content>
                        <Button.Content hidden> $1034.34 </Button.Content>
                    </Button>

                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={12}>
                    <Main/>
            </Grid.Column>
            <Grid.Column width={2}>
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
  