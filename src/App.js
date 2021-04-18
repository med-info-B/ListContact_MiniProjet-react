import React, { Fragment } from "react";
import  Contacts  from './components/contacts/Contacts'
import { Provider } from './components/context'
import NavBar from './components/navBar/NavBar'
import AddContact from './components/contact/AddContact'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/pages/About'
import Notfound from './components/pages/Notfound'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

const App = () => {
  
  return (
    <Provider>
        <Fragment>
          <Router>
            <NavBar title = "Contact manager  "/>
            <Switch>   
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add"  component={AddContact} />
              <Route exact path="/about"  component={About} />
              <Route component={Notfound} />
            </Switch>
          </Router>
        </Fragment>  
    </Provider>
  );
}

export default App;
