import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui';

class LogInScreen extends Component {


  onChangeUsername = event =>{
    this.setState({'username': event.target.value })
  }

  onChangePassword = event =>{
    this.setState({'username': event.target.value })
  }



  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
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
                <RaisedButton label="Log in" primary/>
              </div>
            </Card>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LogInScreen;
