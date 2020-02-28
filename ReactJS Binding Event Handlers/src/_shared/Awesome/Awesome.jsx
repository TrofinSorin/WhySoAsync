import React, { PureComponent } from 'react';

class Awesome extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      showMessage: false
    };
    
    this.showMessageClickHandler = this.showMessageClickHandler.bind(this)
  }

  showMessageClickHandler(event) {
    console.log('event:', event)
    this.setState({
      showMessage: !this.state.showMessage
    })
  }

  render () {
    const { showMessage } = this.state;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AwesomeWrapper">
        <button data-hello='hello' onClick={(event) => this.showMessageClickHandler(event)}>Toggle</button>
        <p>{showMessage ? "You are awesome" : "Nothing"}</p>
      </div>
    );
  }
}

export default Awesome;
