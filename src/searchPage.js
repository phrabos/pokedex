import React, { Component } from 'react'
import PokeList from './pokeList.js';
import data from './data.js';
import './App.css';
// import SearchBox from './searchBox.js';
import SideBar from './sideBar.js';

export default class SearchPage extends Component {
    state = {
        test: 0,
    }

    handleChange = (e) => {
        this.setState({
          test: 5,
        })
      }
      render() {
        console.log(this.state);
        return (
            <>
            <SideBar 
            changeHandler = {this.handleChange}
            handleChange = {this.handleChange}
            options = {['one','two','three']}
            handleChange2 = {this.handleChange}
            options2 = {['Ascending', 'Descending']}
            />
            <div className='ul-div'>
                <PokeList 
                dataObjects={data}
                key={data._id}
                />
            </div>

            </>

        )
    }
}
