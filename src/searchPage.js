import React, { Component } from 'react'
import PokeList from './pokeList.js';
// import data from './data.js';
import './App.css';
import SideBar from './sideBar.js';
import request from 'superagent';

export default class SearchPage extends Component {
    state = {
        objects: [],
        filteredObjects: [],
        aToZ: '',
        category: '',
        search: '',
        egg: '',
    }
    componentDidMount = async () =>{
        await this.loadPokedex();
    }
    loadPokedex = async () => {
      const data = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=10');
      this.setState ({
        objects: data.body.results,
      })
    }

    handleSearchChange = (e) => {
        this.setState({
          search: e.target.value,
        })
      }

    handleSearchButton = async () => {
      const query = this.state.search
      const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${query}`)
      this.setState({objects: data.body.results})
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
        this.loadPokedex()
      }
    handleEggChange = (e) => {
        this.setState({
          egg: e.target.value,
        })
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
          if (this.state.search === '' && this.state.egg ==='') return this.state.objects;
          if (!this.state.search && this.state.egg){
            if (this.state.egg === object.egg_group_2) return true;
          }
          if (this.state.search && !this.state.egg){
            if (object.pokemon.includes(this.state.search)) return true;
          }
          if (this.state.search && this.state.egg){
            if (this.state.egg === object.egg_group_2 && object.pokemon.includes(this.state.search)) return true;
          }

         return false;
        }
        )

        return (
            <>
            <SideBar 
            searchValue = {this.handleSearchChange}
            handleSearchButton = {this.handleSearchButton}
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
                dataObjects={filteredDataObjects}
                />
            </div>

            </>

        )
    }
}
