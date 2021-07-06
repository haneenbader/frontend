import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './component/Header'
import Home from './component/Home'
import Favorite from './component/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
      <Header/>
      
        <Router>
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/favorite"> <Favorite/> </Route>
          </Switch>
        </Router>
       
      </>
    )
  }
}

export default App;