import React, { PureComponent } from 'react';

class Awesome extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      loggedIn: false
    };
  }

  render () {
    const { loggedIn } = this.state;
  
    return (
      <p>{(() => {
        if (loggedIn) {
          return <p>Logged In</p>
        } else {
          return <p>Not Logged In</p>
        }
      })()}</p>
    )
  }
}

export default Awesome;
