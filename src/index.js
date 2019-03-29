import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './Hello';
import Header from './Header';
import LoginForm from './LoginForm';

import CssBaseline from '@material-ui/core/CssBaseline';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Header />
          <LoginForm />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
