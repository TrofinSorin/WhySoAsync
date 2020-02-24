import React from 'react';
import './App.scss';
import UserList from './_shared/UserList/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <UserList></UserList>
      </main>
    </div>
  );
}

export default App;
