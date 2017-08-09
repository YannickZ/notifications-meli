import React from 'react'


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
           <h1>Bienvenido, {this.props.location.state.user.username} !</h1>
         : null}
       </div>
    );

  }
}

export default Home;
