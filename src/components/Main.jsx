import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LogInScreen from './LogInScreen'
import Home from './Home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LogInScreen}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </main>
)


export default Main;
