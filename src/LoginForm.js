import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={this.state.name}
          margin="normal"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <Button variant="contained" className={classes.button} onClick={(event) => this.handleClick(event)}>
          Submit
        </Button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
