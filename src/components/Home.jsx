import React from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'


class Home extends React.Component {

  handleLogOut = () =>{
    this.props.history.push("/")
  }

  handleNotifications = () =>{
    
  }

  constructor(props){
    super(props);
    console.log(props)

    if (typeof(this.props.location.state) == 'undefined'){
      this.props.history.push("/");
    }
  }

  render(){
    return(
      <div>
      { this.props.location.state ?
        <MuiThemeProvider>
        <AppBar
          title={"Bienvenido, " + this.props.location.state.user.username + "!"}
          iconElementRight={
            <div>
              <IconButton
              iconClassName="material-icons"
              tooltip="Mostrar notificaciones"
              >
              notifications
            </IconButton>
            <IconButton
            onClick = {this.handleLogOut}
            iconClassName="material-icons"
            tooltip="Log out"
            >
            exit_to_app
          </IconButton>
          </div>
          }
        />
      </MuiThemeProvider>
         : null}
       </div>
    );

  }
}

export default Home;
