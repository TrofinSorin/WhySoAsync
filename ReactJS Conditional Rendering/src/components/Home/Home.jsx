import React, { Component } from 'react';
import Name from '../../_shared/Name/Name';

class Home extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="HomeWrapper">
       <h1>Home</h1>
       <Name name='Alex'></Name>
       <Name name='John'></Name>
       <Name name='Edward'></Name>
      </div>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
