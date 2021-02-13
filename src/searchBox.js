import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <>
                <input onChange={this.props.searchValue}placeholder='search'></input>
                <button onClick={this.props.buttonHandler}>Submit</button>
            </>
        )
    }
}
