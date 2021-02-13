import React, { Component } from 'react'
import PokeImage from './pokeImage'


export default class PokeList extends Component {
    render() {

        const pokeLI = this.props.dataObjects.map( object =>(<PokeImage 
            key={object._id} 
            url={object.url_image} 
            alt={object.id}
            name={object.pokemon}
            ability={object.ability_1}
            shape={object.shape}
            type={object.type_1}
        />));
        return (
            <ul>
                {pokeLI}
            </ul>
        )
    }
}
