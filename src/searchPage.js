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
        category: '',
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
        category: e.target.value,
        
      })
    }
    handleButtonChange = (e) => {
        this.setState({
          filteredObjects: e.target.value,
        })
      }
    filteredDataObjects = () => {
        if (this.state.search === '' && this.state.category === '') return this.state.objects;
        const filteredObjects = this.state.objects.filter(object => object.pokemon.includes(this.state.search))
        return filteredObjects;
    }

    sortAZ = () => {
            if(this.state.category === '') return;
            if(this.state.aToZ === 'Descending'){
                this.state.objects.sort((a,b) => b[this.state.category].localeCompare(a[this.state.category]))
            }else {
                this.state.objects.sort((a,b) => a[this.state.category].localeCompare(b[this.state.category]))
            }
        }       
        
        render() {

        this.sortAZ();
        return (
            <>
            <SideBar 
            searchValue = {this.handleSearchChange}
            buttonHandler = {this.handleButtonChange}
            handleChange = {this.handleNameChange}
            options = {['pokemon', 'ability_2', 'shape', 'type_1']}
            currentValue={this.state.category}
            placeholder1={'-Category-'}
            handleChange2 = {this.handleAZChange}
            options2 = {['Ascending', 'Descending']}
            currentValue2={this.state.aToZ}
            placeholder2={'-Sort Order-'}

            />
            <div className='ul-div'>
                <PokeList 
                dataObjects={this.filteredDataObjects()}
                />
            </div>

            </>

        )
    }
}
