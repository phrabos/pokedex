import React, { Component } from 'react'
import PokeList from './pokeList.js';
import data from './data.js';

export default class SearchPage extends Component {
    render() {
        return (
            <>
                <PokeList 
                dataObjects={data}
                key={data._id}
                />
            </>
        )
    }
}
