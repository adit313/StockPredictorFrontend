import React from 'react';
import './App.css';

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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import FixedMenuLayout from './FixedMenuLayout';

export default function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={Link} to="/" header>
              Stock Puppies
            </Menu.Item>
            <Menu.Item as={Link} to="/login">Login</Menu.Item>
          </Container>
        </Menu>
        </nav>

        <Switch>
          <Route path="/login">
            </Route>
          <Route path="/">
            <FixedMenuLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
