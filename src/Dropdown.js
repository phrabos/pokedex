import React, { Component } from 'react'
import data from './data'


export default class Dropdown extends Component {
    render() {
        return (
            <>
                <select value={this.props.currentValue} onChange={this.props.handleSortChange}>
                <option value=''>{this.props.placeholder}</option> 
                    {this.props.options.map(option => 
                        <option key={Math.random()}value={option}>{option}</option>
                    )}
                </select>
            </>
        )
    }
}
