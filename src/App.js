import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import HomePage from './homePage.js';
import SearchPage from './searchPage.js';
import Header from './header/header.js';
import DetailPage from './detailPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Header />
                        <div className='wrapper'>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/poke/:pokemonName" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                        
                    </Switch>
                        </div>
                </Router>
            </div>
        )
    }
}