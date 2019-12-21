import React from 'react';
import Home from "./pages/Home"
import Banda from "./pages/Banda"
import Contato from "./pages/Contato"
import Discografia from "./pages/Discografia"
import Merch from "./pages/Merch"
import Videos from "./pages/Videos"
import {Container} from 'reactstrap'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import socialLinks from "./resources/social"

function App() {
  library.add(fab)
  return (
    <div className="App">
      <Router>
        <Header/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/banda" component={Banda}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/discografia" component={Discografia}/>
            <Route path="/videos" component={Videos}/>
            <Route path="/merch" component={Merch}/>
          </Switch>
        </Container>
        <Footer socialLinks={socialLinks}/>
      </Router>
    </div>
  );
}

export default App;
