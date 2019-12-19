import React from 'react';
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


import "bootstrap/scss/bootstrap.scss"

function App() {
  library.add(fab)
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
