import React, { Component } from 'react'


export default class PokeImage extends Component {
    render() {
        return (
            <li>
                <img className = 'images'src = {this.props.url} alt={this.props.alt}/>
                <p>Name: {this.props.name}</p>
                <p>Type: {this.props.type}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
            </li>
        )
    }
}
