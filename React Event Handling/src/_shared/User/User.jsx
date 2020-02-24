import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = (props) => {
  const { user, message, messageClickHandler } = props;
  const userClickHandler = (event, user) => {
    console.log('user:', user)
    console.log('event:', event)
  }

  return (
    <div className="UserWrapper">
      {props.children}
      <p>{message} {user.name}</p>
      <button onClick={(event) => userClickHandler(event, user)}>Click</button>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
