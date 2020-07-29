import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch ,Route, Redirect } from 'react-router-dom';

const App = () =>{
    return(
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            
            <Route exact path="/service" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/"/>
        </Switch>
        </div>
    );
};
export default App;
