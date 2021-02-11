import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Amazing Pokedex Page</h1>
                <nav>
                    <NavLink exact className = 'nav' activeClassName="selected" to="/">
                    Home
                    </NavLink>
                    <NavLink exact className = 'nav' activeClassName="selected" to="/   searchPage">
                    Search
                    </NavLink>
                </nav>
                
            </header>
        )
    }
}
