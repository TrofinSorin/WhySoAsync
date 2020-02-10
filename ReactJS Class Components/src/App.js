import React from 'react';
import './App.scss';
import Welcome from './_shared/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Welcome name='John'></Welcome>
      </main>
    </div>
  );
}

export default App;
