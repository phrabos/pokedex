import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <>
                <input placeholder='search'></input>
                <button onClick={this.props.changeHandler}>Submit</button>
            </>
        )
    }
}
