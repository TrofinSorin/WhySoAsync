import React, { PureComponent } from 'react';

class Dashboard extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLogged: true
    };
  }

  logInHandler = () => {
    this.setState({
      isLogged: true
    })
  }

  logOutHandler = () => {
    this.setState({
      isLogged: false
    })
  }

  render () {
    const { isLogged } = this.state;

    return (
      <div>
        <button onClick={isLogged ?  this.logOutHandler : this.logInHandler}>{isLogged ? 'Log Out' : 'Log In'}</button>
       {isLogged && <h1>Logged</h1>}
       {!isLogged && <h1>Not Logged</h1>}
      </div>
    )
  }
}

export default Dashboard;
