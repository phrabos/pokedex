import React, { Component } from 'react'
import data from './data'


export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}>
                    {this.props.options.map(option => 
                        <option key={Math.random()}value={option}>{option}</option>
                    )}
                </select>
            </>
        )
    }
}
