import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './User.styles';

const User = (props) => {
  console.log('props:', props)
  const { user, src } = props;

  return (
    <div className="UserWrapper">
      {props.children}
      <img alt='avatar' src={src} />
      <p>Name: {user ? user.name : null}, Age: {user ? user.age : null}</p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

User.defaultProps = {
  src: 'https://via.placeholder.com/150'
};

export default User;
