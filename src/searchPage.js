import React, { Component } from 'react'
import PokeList from './pokeList.js';
import './App.css';
import SideBar from './sideBar.js';
import request from 'superagent';
import Spinner from './spinner.js'

export default class SearchPage extends Component {
    state = {
        objects: [],
        aToZ: '',
        category: '',
        search: '',
        shape: '',
        loading: false,
    }
    componentDidMount = async () =>{
        await this.fetchPokedex();

    }

    fetchPokedex = async () => {
        this.setState({
        loading: true,
      })
      const data = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=50&pokemon=${this.state.search}&shape=${this.state.shape}&sort=${this.state.category}&direction=${this.state.aToZ}`);
      this.setState ({
        objects: data.body.results,
        loading: false
      })
    }

    handleSearchChange = async (e) => {
        this.setState({
          search: e.target.value,
        })
      }

    handleSearchButton = async () => {
      await this.fetchPokedex()
    }
    handleAZChange = async (e) => {
        await this.setState({
          aToZ: e.target.value,
        })
        await this.fetchPokedex();
      }
    handleSortChange = async (e) => {
      await this.setState({
        category: e.target.value,
      })
      await this.fetchPokedex();
    }
    handleClearButtonChange = async () => {
      await this.setState({
        aToZ: '',
        category: '',
        search: '',
        shape: '',
      })
      await this.fetchPokedex()
      }
      handleShapeChange = async (e) => {
      await this.setState({
        shape: e.target.value,
      })
      await this.fetchPokedex();
    }   
    
    render() {

        // const sortedData = this.state.objects.sort((a,b) =>{

        //   if(this.state.category === '')return this.state.objects;
        //   if(this.state.category && this.state.aToZ !== 'Descending')return  a[this.state.category].localeCompare(b[this.state.category]);
        //   if(this.state.category && this.state.aToZ === 'Descending') return b[this.state.category].localeCompare(a[this.state.category]);
        //   else return true;
        // } 
        // )
        
        // const filteredDataObjects = sortedData.filter((object) => {
        //   if (this.state.search === '' && this.state.shape ==='') return this.state.objects;
        //   if (!this.state.search && this.state.shape){
        //     if (this.state.shape === object.shape_group_2) return true;
        //   }
        //   if (this.state.search && !this.state.shape){
        //     if (object.pokemon.includes(this.state.search)) return true;
        //   }
        //   if (this.state.search && this.state.shape){
        //     if (this.state.shape === object.shape_group_2 && object.pokemon.includes(this.state.search)) return true;
        //   }

        //   return false;
        // }
        // )
   
        return (
            <>
           
            <SideBar 
            searchValue = {this.handleSearchChange}
            handleSearchButton = {this.handleSearchButton}
            buttonHandler = {this.handleClearButtonChange}
            handleSortChange = {this.handleSortChange}
            options = {['pokemon', 'ability_1', 'shape', 'type_1']}
            currentValue={this.state.category}
            placeholder1={'-Category-'}
            handleSortChange2 = {this.handleAZChange}
            options2 = {['asc', 'desc']}
            currentValue2={this.state.aToZ}
            placeholder2={'-Sort Order-'}
            handleShapeChange={this.handleShapeChange}
            />
            {this.state.loading ? <Spinner />
            : <div className='ul-div'>
            <PokeList 
            dataObjects={this.state.objects}
            />
            </div>}
            </>

        )
    }
}
