import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Createform() {
  const [nombre, setNombre] = useState("");  // Corrige la sintaxis aquí
  const [especie, setEspecie] = useState(""); // Corrige la sintaxis aquí
  const [origen, setOrigen] = useState("");   // Corrige la sintaxis aquí
  const [imagen, setImagen] = useState("");   // Corrige la sintaxis aquí
  
  const validarForm = (e) => {
    e.preventDefault(); // Corrige la sintaxis aquí
    if (!nombre || !especie || !origen || !imagen) {
      alert("Por favor, complete todos los campos."); // Cambia el mensaje de alerta
    } else {
      alert("Personaje creado");
      // Aquí puedes agregar lógica para enviar los datos a tu API o manejarlos como desees
    }
  };

  return (
    <div>
      <Form onSubmit={validarForm}>  {/* Conectar validarForm al evento onSubmit */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            type="text" 
            placeholder="Ingrese Nombre" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOrigin">
          <Form.Label>Origen</Form.Label>
          <Form.Control 
            value={origen} 
            onChange={(e) => setOrigen(e.target.value)} 
            type="text" 
            placeholder="Ingrese Origen" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSpecies">
          <Form.Label>Especie</Form.Label>
          <Form.Control 
            value={especie} 
            onChange={(e) => setEspecie(e.target.value)} 
            type="text" 
            placeholder="Ingrese Especie" 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImageUrl">
          <Form.Label>URL Imagen</Form.Label>
          <Form.Control 
            value={imagen} 
            onChange={(e) => setImagen(e.target.value)} 
            type="text" 
            placeholder="Ingrese URL" 
          />
        </Form.Group>

        <Form.Text className="text-muted">
          {/* Puedes agregar un mensaje informativo aquí si lo deseas */}
        </Form.Text>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
