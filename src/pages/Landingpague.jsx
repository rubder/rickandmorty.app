import React from 'react';
import { Link } from 'react-router-dom'; 
export default function Landingpague() {
  return (
    <div>
      <h1>Bienvenidos a Rick and Morty</h1>
            <Link to="/home">
        <button className="btn btn-primary">Entrar</button>
      </Link>
    </div>
  );
}
