import React, { Component } from 'react'
import PokeList from './pokeList.js';
import data from './data.js';
import './App.css';
// import SearchBox from './searchBox.js';
import SideBar from './sideBar.js';

export default class SearchPage extends Component {
    state = {
        objects: data,
        filteredObjects: [],
        aToZ: '',
        type: '',
        search: '',
    }
    handleSearchChange = (e) => {
        this.setState({
          search: e.target.value,
        })
      }
    handleAZChange = (e) => {
        this.setState({
          aToZ: e.target.value,
        })
      }
    handleNameChange = (e) => {
      this.setState({
        type: e.target.value,
      })
    }
    handleButtonChange = (e) => {
        this.setState({
          filteredObjects: e.target.value,
        })
      }
    
      render() {
        const uniques = Array.from(new Set(data.map(object => object.type_1)))
        console.log(this.state);

        const filteredObjects = this.state.objects.filter(object => object.pokemon.includes(this.state.search))

        return (
            <>
            <SideBar 
            searchValue = {this.handleSearchChange}
            buttonHandler = {this.handleButtonChange}
            handleChange = {this.handleNameChange}
            options = {uniques}
            handleChange2 = {this.handleAZChange}
            options2 = {['Ascending', 'Descending']}
            />
            <div className='ul-div'>
                <PokeList 
                dataObjects={filteredObjects}
                />
            </div>

            </>

        )
    }
}
