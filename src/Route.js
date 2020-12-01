import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ProductItems from './Components/ProductItems';
import NavBar from './NavBar';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function RouteConfig() {

    return(
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductItems} />
                    <Route path="*" component={() => <h2>404 Not found!</h2>} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouteConfig;