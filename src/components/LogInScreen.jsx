import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui';

class LogInScreen extends Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <Card className="container">
               <form action="/">
                 <h2 className="card-heading">Login</h2>

                 <div className="field-line">
                   <TextField
                     floatingLabelText="Username"
                     name="email"
                   />
                 </div>

                 <div className="field-line">
                   <TextField
                     floatingLabelText="Password"
                     type="password"
                     name="password"
                   />
                 </div>

                 <div className="button-line">
                   <RaisedButton type="submit" label="Log in" primary />
                 </div>
               </form>
             </Card>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default LogInScreen;
