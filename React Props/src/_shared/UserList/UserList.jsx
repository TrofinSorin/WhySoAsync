import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import UserClass from '../UserClass/UserClass';

class UserList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      companyName: 'OldCompany',
      users: [
        { name: 'David', active: true, age: 17 },
        { name: 'Alex', active: false, age: 25 },
        { name: 'John', active: true, age: 35 }
      ],
      filterValue: 16
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        companyName: 'NewCompany'
      })
    }, 2000)
  }

  filterChangeHandler = (event) => {
    this.setState({
      filterValue: event.target.value
    })
  }

  render () {
    const { users, filterValue } = this.state;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="UserListWrapper">
        <fieldset>
          <legend>Filter</legend>
          <select onChange={(event) => this.filterChangeHandler(event)}>
            <option>16</option>
            <option>24</option>
            <option>30</option>
          </select>
        </fieldset>
        <h1>{this.state.companyName}</h1>
        {users
          .filter((item) => item.age > filterValue)
          .map((userObject, index) => (
          <UserClass user={userObject} key={index}></UserClass>))}
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
