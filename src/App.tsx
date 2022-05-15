import React from 'react';
import './App.css';
import PetsList from './components/list';


function App() {

  return (
    <div className="App">
      <header className="header">
        <h3>
          Veterinária Bom Dia
        </h3>
      </header>
      <PetsList />
    </div>

  );
}

export default App;
