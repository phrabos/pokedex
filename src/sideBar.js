import React, { Component } from 'react'
import Dropdown from './Dropdown'
import SearchBox from './searchBox'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-box'>
                <SearchBox 
                    searchValue = {this.props.searchValue}
                    buttonHandler = {this.props.buttonHandler}
                />
                <Dropdown 
                    currentValue={this.props.currentValue}
                    handleChange={this.props.handleChange}
                    options={this.props.options}
                    placeholder={this.props.placeholder1}
                />
                <Dropdown 
                    currentValue={this.props.currentValue2}
                    handleChange={this.props.handleChange2}
                    options={this.props.options2}
                    placeholder={this.props.placeholder2}
                />
            </div>
        )
    }
}
