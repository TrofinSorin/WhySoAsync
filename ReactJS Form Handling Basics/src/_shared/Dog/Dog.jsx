import React from 'react';

const Dog = (props) => {
  console.log('props:', props)
  const {  dog } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}} className="DogWrapper">
      <p style={{ marginRight: '1rem'}}>{dog.name}</p>
      <button onClick={() => props.greetDogList(dog)}>{dog.adopted ? 'Adopted': 'Not Adopted'}</button>
    </div>
  );
}

export default Dog;
