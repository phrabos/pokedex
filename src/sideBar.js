import React, { Component } from 'react'
import Dropdown from './Dropdown'
import SearchBox from './searchBox'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-box'>
                <h4>Search by Name</h4>
                <SearchBox 
                    searchValue = {this.props.searchValue}
                    handleSearchButton = {this.props.handleSearchButton}
                    buttonHandler = {this.props.buttonHandler}
                />
                <h4>Sort</h4>
                <Dropdown 
                    currentValue={this.props.currentValue}
                    handleSortChange={this.props.handleSortChange}
                    options={this.props.options}
                    placeholder={this.props.placeholder1}
                />
                <Dropdown 
                    currentValue={this.props.currentValue2}
                    handleSortChange={this.props.handleSortChange2}
                    options={this.props.options2}
                    placeholder={this.props.placeholder2}
                />
                <h4>Choose Your Egg Type</h4>
                <button onClick={this.props.handleEggChange}className='option' value='dragon'>Dragon</button>
                <button onClick={this.props.handleEggChange}className='option' value='water1'>Water</button>
                <button onClick={this.props.handleEggChange}className='option' value='plant'>Plant</button>
            </div>
        )
    }
}
