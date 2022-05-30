import { Button } from '@mui/material';
import React from 'react';
import './App.css';
import PetsList from './components/list';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  return (
    <div className="App">
      <header className="header">
        <h3>
          Veterinária Bom Dia
        </h3>
      </header>
      <div className="content">
        <Button variant="contained" onClick={handleClick}>Registro de Pets</Button>
        <PetsList />
      </div>
    </div>

  );
}

export default App;
