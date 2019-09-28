import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'
import Home from './screen/Home'
import Card from '../src/component/Card'
import Store from './Store'
import Login from './action/Login'

export default class App extends Component {
  componentDidMount(){
    localStorage.getItem("");
    console.log();
    
  }
  render() {
    return (
      <div>
        <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/Card" component={Card}/>
            <Route path="/Login" component={Login}/>
           </Switch>
        </Router>
        </Provider>
      </div>
    )
  }
}

