import React, { PureComponent } from "react";

class UserList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      companyName: "OldCompany",
      users: [
        { id: 1, name: "David", active: true, age: 17 },
        { id: 2, name: "Alex", active: false, age: 25 },
        { id: 3, name: "John", active: true, age: 35 },
      ],
    };
  }

  addUser = () => {
    const users = Object.assign([], this.state.users);

    users.unshift({
      id: Math.random(),
      name: "Another User",
      active: true,
      age: 20,
    });

    this.setState({
      users: users,
    });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        companyName: "NewCompany",
      });
    }, 2000);
  };

  render() {
    const { users } = this.state;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="UserListWrapper">
        <h1>{this.state.companyName}</h1>
        <button onClick={() => this.addUser()}>Add User</button>
        {users.map((user, index) => (
          <input
            key={user.id}
            placeholder={user.name}
            style={{ display: "block", marginBottom: "0.5rem" }}
          />
        ))}
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
