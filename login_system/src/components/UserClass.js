import React, { Component } from 'react';

//Class Component
export default class UserClass extends Component {
    render() {
        return (
            <div>
                <h2>This is {this.props.name}</h2>
            </div>
        )
    }
}

