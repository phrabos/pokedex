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
        egg: 'dragon',
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
    handleClearButtonChange = (e) => {
        this.setState({
          aToZ: '',
          category: '',
          search: '',
          egg: '',
        })
      }
    handleEggChange = (e) => {
        this.setState({
          egg: e.target.value,
        })
        alert(`${e.target.value} too much if/else logic to get these working!`)
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
        const filteredDataObjects = this.state.objects.filter((object) => {
          if (this.state.search === '' && this.state.category === '' && this.state.egg ==='') return this.state.objects;
          return object.pokemon.includes(this.state.search)
          // else if(object.egg_group_2 === this.state.egg) return true;
        //  return this.state.objects;
        }
        )
        
        // const filteredEggObjects = filteredDataObjects.filter((object) => {
        //   // if ( this.state.egg ==='') return filteredDataObjects;
        //   if (object.egg_group_2 === this.state.egg) return true;
        //   return filteredDataObjects;
        // }
        // )
        return (
            <>
            <SideBar 
            searchValue = {this.handleSearchChange}
            buttonHandler = {this.handleClearButtonChange}
            handleChange = {this.handleNameChange}
            options = {['pokemon', 'ability_1', 'shape', 'type_1']}
            currentValue={this.state.category}
            placeholder1={'-Category-'}
            handleChange2 = {this.handleAZChange}
            options2 = {['Ascending', 'Descending']}
            currentValue2={this.state.aToZ}
            placeholder2={'-Sort Order-'}
            handleEggChange={this.handleEggChange}

            />
            <div className='ul-div'>
                <PokeList 
                // dataObjects={this.filteredDataObjects()}
                dataObjects={filteredDataObjects}
                />
            </div>

            </>

        )
    }
}
