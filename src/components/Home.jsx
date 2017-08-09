import React from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Home extends React.Component {

   style : {
    textAlign : 'center'
  }

  handleLogOut = () =>{
    this.props.history.push("/")
  }

  handleNotifications = () =>{
    fetch('http://localhost:8080/api/user/' + this.state.user.username +'/notifications')
    .then(response=>response.json().then(notifications=>{
        if (notifications.status == "ok"){
            this.setState({'notifications' : notifications})
        }
}))

  }

  constructor(props){
    super(props);

    if (typeof(this.props.location.state) == 'undefined'){
      this.props.history.push("/");
    } else {

          this.state = {
            'user' : this.props.location.state.user,
            'notifications': {}
          }
    }


  }

  render(){
    return(
      <div>
      { this.props.location.state ?
        <MuiThemeProvider>
          <div>
        <AppBar
          title={"Bienvenido, " + this.state.user.username + "!"}
          iconElementRight={
            <div>
              <IconButton
              onClick = {this.handleNotifications}
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
      <Table >
          <TableHeader>
        <TableRow style={this.style}>
          <TableHeaderColumn>Mensaje</TableHeaderColumn>
          <TableHeaderColumn>Tipo</TableHeaderColumn>
          <TableHeaderColumn>Aplicacion</TableHeaderColumn>
          <TableHeaderColumn>Prioridad</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>

        { this.state.notifications.notifications ?
              this.state.notifications.notifications.map((notification)=>
                    <TableRow >
                    <TableRowColumn>{notification.message}</TableRowColumn>
                    <TableRowColumn> {notification.type}</TableRowColumn>
                    <TableRowColumn> {notification.application}</TableRowColumn>
                    <TableRowColumn> {notification.priority}</TableRowColumn>
                    </TableRow>

            )
          :null
        }

    </TableBody>
  </Table>

  </div>
      </MuiThemeProvider>
         : null}
       </div>
    );

  }
}

export default Home;
