import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import HomePage from './homePage.js';
import SearchPage from './searchPage.js';
import Header from './header.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/quote" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}