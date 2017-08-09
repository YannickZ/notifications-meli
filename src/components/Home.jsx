import React from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends React.Component {

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
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
         : null}
       </div>
    );

  }
}

export default Home;
