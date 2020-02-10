import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

    render() {
        return (
            <h1>{this.state.message} {this.props.name}</h1>
        )
    }
}

export default Welcome;