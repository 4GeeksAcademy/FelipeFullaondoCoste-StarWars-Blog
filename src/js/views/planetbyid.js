import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetById = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchPlanetById(id);
    }, [id]);

    if (store.loading) return <p>Loading...</p>;
    if (store.error) return <p>Error: {store.error}</p>;
    if (!store.selectedPlanet) return <p>No se encontró el planeta</p>;

    const { name, population, climate, terrain, gravity } = store.selectedPlanet;

    return (
        <div className="container text-center">
            <h1>{name}</h1>
            <p><strong>Población:</strong> {population}</p>
            <p><strong>Clima:</strong> {climate}</p>
            <p><strong>Terreno:</strong> {terrain}</p>
            <p><strong>Gravedad:</strong> {gravity}</p>
        </div>
    );
};

export default PlanetById;
