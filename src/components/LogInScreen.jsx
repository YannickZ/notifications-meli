import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardTitle} from 'material-ui';
import Dialog from 'material-ui/Dialog';
import { withRouter } from 'react-router';
import PropTypes from "prop-types";

class LogInScreen extends React.Component {

handleLogin = () => {
  fetch('http://localhost:8080/api/login', {
    headers: new Headers({'Content-Type': 'application/json'}),
    method: 'POST',
    body: JSON.stringify({"username": this.state.username, "password": this.state.password})
  }).then((res) =>{
    return res.json();
  }).then((json) => {
    if (json.status == "error") {
      this.setState({'username': '', 'password': '', 'open': true})
    } else {
      this.setState({'active_user': json})
      this.props.history.push("/home", {user: json,logged: false});
    }
  });
}

  onChangeUsername = event =>{
    this.setState({'username': event.target.value })
  }

  onChangePassword = event =>{
    this.setState({'password': event.target.value })
  }

  handleClose = () => {
    this.setState({open: false});
  };


  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: '',
      active_user : {},
      open:false,
    }

    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }


  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
          />,
          <FlatButton
            label="Aceptar"
            primary={true}
            onTouchTap={this.handleClose}
          />,
    ];

    return (

      <div>
        <MuiThemeProvider>
          <div>
            <Dialog
          title="El usuario o la contraseña son incorrectos!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          />
            <Card className="container">
              <h2 className="card-heading">Login</h2>
              <div className="field-line">
                <TextField floatingLabelText="Username" name="username" onChange={this.onChangeUsername}/>
              </div>

              <div className="field-line">
                <TextField floatingLabelText="Password" type="password" name="password" onChange={this.onChangePassword}/>
              </div>

              <div className="button-line">
                <RaisedButton label="Log in" primary onClick={this.handleLogin}/>
              </div>
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LogInScreen;
