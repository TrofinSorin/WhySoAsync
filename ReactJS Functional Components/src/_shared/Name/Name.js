import React from 'react';
import PropTypes from 'prop-types';

const Name = (props) => {
    return (<h1>{props.name}</h1>)
}

Name.propTypes = {
    name: PropTypes.string.isRequired
}

export default Name;