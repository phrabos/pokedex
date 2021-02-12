import React, { Component } from 'react'
import Dropdown from './Dropdown'
import SearchBox from './searchBox'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-box'>
                <SearchBox 
                    changeHandler = {this.props.changeHandler}
                />
                <Dropdown 
                    handleChange={this.props.handleChange}
                    options={this.props.options}
                />
                <Dropdown 
                    handleChange={this.props.handleChange2}
                    options={this.props.options2}
                />
            </div>
        )
    }
}
