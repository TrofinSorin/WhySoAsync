import React from 'react';

const Dog = (props) => {
  return (
  <div style={{ display: 'flex'}} className="DogWrapper">
    <p onClick={() => props.updateDog(props.dog)} style={{ cursor: 'pointer', marginRight: '1rem'}}>{props.dog.name}</p>
    {props.dog.selected ? <p>Selected</p> : <p>Not Selected</p>}
  </div>
)};

Dog.propTypes = {
  // bla: PropTypes.string,
};

Dog.defaultProps = {
  // bla: 'test',
};

export default Dog;
