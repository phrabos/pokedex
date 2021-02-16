import React, { Component } from 'react'
import PokeList from './pokeList.js';
// import data from './data.js';
import './App.css';
import SideBar from './sideBar.js';
import request from 'superagent';
import Spinner from './spinner.js'
import { nativeTouchData } from 'react-dom/test-utils';

export default class SearchPage extends Component {
    state = {
        objects: [],
        filteredObjects: [],
        aToZ: '',
        category: '',
        search: '',
        egg: '',
        loading: false,
    }
    componentDidMount = async () =>{
        await this.loadPokedex();

    }
    loadPokedex = async () => {
      this.setState({
        loading: true,
      })
      const data = await request.get ('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=50');
      this.setState ({
        objects: data.body.results,
        loading: false
      })
    }

    handleSearchChange = async (e) => {
        this.setState({
          search: e.target.value,
          loading: true,
        })
        const query = this.state.search
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${query}`)
        this.setState({objects: data.body.results, loading: false})
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
    handleSortChange = (e) => {
      this.setState({
        category: e.target.value,
        
      })
    }
    handleClearButtonChange = (e) => {
      this.loadPokedex()
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
    }   
    
    render() {
        console.log(this.state.objects)
        console.log(this.state.category)
        const sortedData = this.state.objects.sort((a,b) =>{

          if(this.state.category === '')return this.state.objects;
          if(this.state.category && this.state.aToZ !== 'Descending')return  a[this.state.category].localeCompare(b[this.state.category]);
          if(this.state.category && this.state.aToZ === 'Descending') return b[this.state.category].localeCompare(a[this.state.category]);
          else return true;
        } 
        )
        
        const filteredDataObjects = sortedData.filter((object) => {
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
            {this.state.loading && <Spinner />}
            <SideBar 
            searchValue = {this.handleSearchChange}
            handleSearchButton = {this.handleSearchButton}
            buttonHandler = {this.handleClearButtonChange}
            handleSortChange = {this.handleSortChange}
            options = {['pokemon', 'ability_1', 'shape', 'type_1']}
            currentValue={this.state.category}
            placeholder1={'-Category-'}
            handleSortChange2 = {this.handleAZChange}
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
