import React, { Component } from 'react'


export default class PokeImage extends Component {
    render() {
        return (
            <li>
                <img className = 'images'src = {this.props.url} alt={this.props.alt}/>
                <p>Name: {this.props.name}</p>
                <p>Abitliy: {this.props.ability}</p>
                <p>Shape: {this.props.shape}</p>
                <p>Type: {this.props.type}</p>
                <p>Egg: {this.props.egg}</p>
            </li>
        )
    }
}
