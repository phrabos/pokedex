import React, { Component } from 'react'
import data from './data'


export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleChange}>
                <option value=''>- Sort By-</option> 
                    {this.props.options.map(option => 
                        <option key={Math.random()}value={option}>{option}</option>
                    )}
                </select>
            </>
        )
    }
}
