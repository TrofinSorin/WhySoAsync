import React, { useState } from 'react';

const Name = (props) => {
    const [message, setMessage] = useState({ importance: 1});
    const { importance } = message;
    const { name, nickname } = props;
    return (<h1>Hello {name} {nickname} Importance: {importance}</h1>)
}

export default Name;