import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './UserList.styles';

class UserList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      companyName: 'OldCompany',
      users: [
        {name: 'David', active: true, age: 17},
        {name: 'Alex', active: false, age: 25},
        {name: 'John', active: true, age: 35}
      ]
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        companyName: 'NewCompany'
      })
    }, 2000)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="UserListWrapper">
        <h1>{this.state.companyName}</h1>
        <p>{this.state.users[0].name}</p>
        <p>{this.state.users[1].name}</p>
        <p>{this.state.users[2].name}</p>
      </div>
    );
  }
}

UserList.propTypes = {
  // bla: PropTypes.string,
};

UserList.defaultProps = {
  // bla: 'test',
};

export default UserList;
