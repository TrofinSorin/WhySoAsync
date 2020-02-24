import React, { PureComponent } from 'react';
import User from '../User/User';

class UserList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      companyName: 'OldCompany',
      users: [
        { id: 1, name: 'David', active: true, age: 17 },
      ],
      filterValue: 16,
      message: 'Hello'
    };
  }

  messageClickHandler = (event, user, name) => {
    console.log('name:', name)
    console.log('user:', user)
    console.log('event:', event)
    const users = Object.assign([], this.state.users);
    users.forEach((userItem) => {
      console.log('userItem:', userItem)
      if (userItem.id === user.id) {
        userItem.name = name;
      }
    })
    
    this.setState({
      message: 'Goodbye',
      users: users
    })
  }

  render () {
    const { users, message } = this.state;

    return (
      <div className="UserListWrapper">
        <div>
          {users.map((item, index) => <User messageClickHandler={this.messageClickHandler} message={message} key={index} user={item}></User>)}
        </div>
      </div>
    );
  }
}

export default UserList;
