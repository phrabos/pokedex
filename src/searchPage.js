import React, { Component } from 'react'
import PokeList from './pokeList.js';
import data from './data.js';
import './App.css';
// import SearchBox from './searchBox.js';
import SideBar from './sideBar.js';

export default class SearchPage extends Component {
    state = {
        objects: [],
        filteredObjects: [],
        aToZ: '',
        type: '',
        search: '',
    }
    componentDidMount = () =>{
        this.setState({
            objects: data,
        })
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

        const filteredObjects = this.state.objects.filter(object => object.pokemon.includes(this.state.search))
        const sortedObjects = filteredObjects.filter(object => object.type_1.includes(this.state.type));
        const orderedObjects = sortedObjects.sort((a,b) => a - b);

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
                dataObjects={orderedObjects}
                />
            </div>

            </>

        )
    }
}
