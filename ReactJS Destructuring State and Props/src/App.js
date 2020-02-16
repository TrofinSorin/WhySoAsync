import React from 'react';
import './App.scss';
import Welcome from './_shared/Welcome/Welcome';
import Name from './_shared/Name/Name';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* <Welcome name='Caustic' nickname='Toxic Trapper'></Welcome> */}
        <Name name='Octane' nickname='High-Speed Daredevil' prop1='1' prop2='prop2' prop3='3'></Name>
      </main>
    </div>
  );
}

export default App;
