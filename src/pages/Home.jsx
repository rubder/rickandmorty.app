import Navigeitionbar from "../componentes/Navigeitionbar";
import Footer from "../componentes/Footer";
import { useEffect, useState } from "react";
import Pjcard from '../componentes/Pjcard';


export default function Home() {  // Cambia 'home' a 'Home'
    const [personajes, setPersonajes] = useState([]);

    const getCharters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const result = await response.json();
            setPersonajes(result.results);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    useEffect(() => {
        getCharters();
    }, []);

    console.log(personajes);

    return (
        <div>
            <Navigeitionbar />
            <div className="contenedorpj">
                {personajes.map((p, i) => (
                    <Pjcard key={i} Charters={p} />  // Cambia 'charter={p}' a 'Charters={p}'
                ))}
            </div>
            <Footer />
        </div>
    );
}
