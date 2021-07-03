import React, { Component } from 'react';
import Header from "./Headercomponent";
import Footer from "./Footercomponent";
import Home from "./Homecomponent";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />

                <Router>
                    <Switch >
                        <Route exact path="/Home" component={Home} />


                        <Redirect to="/Home" />
                    </Switch>
                </Router>
                <Footer />

            </div>
        );
    }
}

export default Main;