import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log('props', this.props);
        this.state = {
            message: 'Hello'
        }
    }

    render() {
        const {name, nickname} = this.props;
        const { message } = this.state;

        return (
            <h1>{message} {name} the {nickname}</h1>
        )
    }
}

export default Welcome;