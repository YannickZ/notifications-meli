import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui';

class LogInScreen extends Component {


  handleLogin = () =>{
      let loginScreen = this
      fetch('http://localhost:8080/api/login', {headers: new Headers({
                  'Content-Type': 'application/json'
              }), method: 'POST', body: JSON.stringify({"username":"pilar","password":"architect123"}) })
              .then(function(res) {
                  return res.json();
              }).then(function(json) {
                loginScreen.setState({'active_user' : json})
              });
  }

  onChangeUsername = event =>{
    this.setState({'username': event.target.value })
  }

  onChangePassword = event =>{
    this.setState({'password': event.target.value })
  }



  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      active_user : {}
    }

    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
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
