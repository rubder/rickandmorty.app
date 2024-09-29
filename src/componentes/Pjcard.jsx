import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Pjcard({ Charters }) {  // Cambia 'pjcard' a 'Pjcard'
    const { name, species, origin, image } = Charters;
   
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Especie: {species}
                    <br />
                    Origen: {origin.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
