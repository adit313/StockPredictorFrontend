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
        <p>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Stock Puppies
            </Menu.Item>
            <Menu.Item as='a'>Login</Menu.Item>
          </Container>
        </Menu>

            <FixedMenuLayout />
          </p>
      </div>
    </Router>
  );
}
