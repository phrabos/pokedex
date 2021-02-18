import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './spinner.js';

export default class DetailPage extends Component {

    state={
        objects: [],
    }
    componentDidMount = async () => {
         
            await this.setState({
            loading: true,
          })
          const data = await request.get (`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
          await this.setState ({
            objects: data.body.results[0],
            loading: false
          })
    }
    render() {
        console.log(this.props)
        return (
            <div className='details-page'>
            {
            this.state.loading 
                ? <Spinner />
                : <div className='ul-detail'>
                <img src={this.state.objects.url_image} alt='pokemon' />
                <p>Pokemon: {this.state.objects.pokemon}</p>
                <p>Attack: {this.state.objects.attack}</p>
                <p>Defense: {this.state.objects.defense}</p>
                <p>Type-1: {this.state.objects.type_1}</p>
                <p>Type-2: {this.state.objects.type_2}</p>
                <p>Shape: {this.state.objects.shape}</p>
                <p>Ability-1: {this.state.objects.ability_1}</p>
                <p>Ability-2: {this.state.objects.ability_2}</p>

                </div>
            }
            </div>
        )
    }
}
