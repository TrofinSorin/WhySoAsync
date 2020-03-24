import React from 'react';
import './App.scss';
import DogList from './_shared/DogList/DogList';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <DogList></DogList>
      </main>
    </div>
  );
}

export default App;
