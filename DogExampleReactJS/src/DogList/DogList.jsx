import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
//import { Test } from './DogList.styles';
import axios from 'axios';
import Dog from '../Dog/Dog';
import { CircularProgress } from '@material-ui/core';

const DogList = (props) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    console.log('use effect init');
    getDogs();

    return () => {
      console.log('COMPONENT DESTROYED');
    }
  }, []);

  useEffect(() => {
    console.log('dogs:', dogs);
  }, [dogs]);

  const getDogs = () => {
    axios.get('http://localhost:3001/dogs').then(response => {
      console.log('response:', response)
      setDogs(response.data);
    })
  }

  const updateDog = (newUpdateDog) => {
    newUpdateDog.selected = !newUpdateDog.selected;

    dogs.forEach((dog) => {
      if (dog.id === newUpdateDog.id) {
        dog = newUpdateDog
      }
    })

    setDogs([...dogs])
  }

  return (
  <div className="DogListWrapper">
    {dogs.length ? dogs.map((dog, index) => <Dog key={index} updateDog={updateDog} dog={dog}></Dog>)
  : <CircularProgress></CircularProgress>  
  }
  </div>
)};

DogList.propTypes = {
  // bla: PropTypes.string,
};

DogList.defaultProps = {
  // bla: 'test',
};

export default DogList;
