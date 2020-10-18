import React, { PureComponent } from 'react';
import Dog from '../Dog/Dog';

class DogList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      fromDogList: 'DogListComponent',
      dogs: [
        {id: 1,name: 'Puffy', adopted: false},
        {id: 2,name: 'Elsa', adopted: false},
        {id: 3,name: 'Bosco', adopted: false}
      ]
    };
  }

  greetDogList = (childDog) => {
    const newDogArray = Object.assign([], this.state.dogs);

    newDogArray.forEach((dog) => {
      if (dog.id === childDog.id) {
        dog.adopted = !dog.adopted
      }
    })

    this.setState({
      dogs: newDogArray
    })
  }

  render () {
    const { dogs } = this.state;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="DogListWrapper">
        {dogs.map((dog) => (
          <Dog key={dog.id} dog={dog} greetDogList={this.greetDogList}></Dog>
        ))}
      </div>
    );
  }
}

export default DogList;
