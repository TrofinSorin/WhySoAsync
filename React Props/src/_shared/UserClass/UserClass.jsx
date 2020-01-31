import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './UserClass.styles';

class UserClass extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('UserClass mounted');
    console.log('this.props', this.props);
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UserClassWrapper">
        User Class
      </div>
    );
  }
}

UserClass.propTypes = {
  // bla: PropTypes.string,
};

UserClass.defaultProps = {
  // bla: 'test',
};

export default UserClass;
