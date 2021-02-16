import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <>
                <input onChange={this.props.searchValue}placeholder='search'></input>
                <button onClick={this.props.handleSearchButton}>Search</button>
                <button onClick={this.props.buttonHandler}>Clear Search</button>
            </>
        )
    }
}
