import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import PageContact from './pages/PageContact'

export default function App() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/contact' component={PageContact}/>
      </Switch>
    </Router>
  )
}
