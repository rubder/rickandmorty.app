import React, { useEffect, useContext } from "react";
import Navigeitionbar from "../componentes/Navigeitionbar";
import Footer from "../componentes/Footer";
import Pjcard from "../componentes/Pjcard";
import { PersonajeContext } from "../componentes/Contexts/PersonajesContext";

export default function Home() {
    const { personajes } = useContext(PersonajeContext);

    return (
        <div>
            <Navigeitionbar />
            <div className="contenedorpj">
                {personajes.length > 0 ? (
                    personajes.map((p, i) => (
                        <Pjcard key={i} Charters={p} />
                    ))
                ) : (
                    <p>No characters available</p>
                )}
            </div>
            <Footer />
        </div>
    );
}
