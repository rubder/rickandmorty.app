import { createContext, useState, useEffect } from "react";

export const PersonajeContext = createContext();

const PersonajesProvider = ({ children }) => {
    const [personajes, setPersonajes] = useState([]);

    const getCharters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setPersonajes(data.results); // Asegúrate de usar `results` del API
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    useEffect(() => {
        getCharters();
    }, []);

    return (
        <PersonajeContext.Provider value={{ personajes, setPersonajes }}>
            {children}
        </PersonajeContext.Provider>
    );
};

export default PersonajesProvider;
