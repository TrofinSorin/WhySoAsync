import React, { PureComponent } from 'react';
import axios from 'axios';
import Dog from '../Dog/Dog';
import CircularProgress from '@material-ui/core/CircularProgress';

class DogListClass extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('DogListClass Init');
    this.getDogs();
  }

  componentWillUnmount = () => {
    console.log('DogListClass will unmount');
  }

  getDogs = () => {
    axios.get('http://localhost:3001/dogs').then(response => {
      this.setState({
        dogs: response.data
      })
    })
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const { dogs } = this.state;

    return (
      <div className="DogListClassWrapper">
        {dogs.length ? dogs.map((dog, index) => (
          <Dog key={index} dog={dog}></Dog>
        )) : <CircularProgress></CircularProgress>}
      </div>
    );
  }
}

DogListClass.propTypes = {
  // bla: PropTypes.string,
};

DogListClass.defaultProps = {
  // bla: 'test',
};

export default DogListClass;
