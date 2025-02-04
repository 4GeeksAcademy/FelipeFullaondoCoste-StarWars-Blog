import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetById = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchPlanetById(id);
    }, [id]);

    if (store.loading) return <p className="text-center text-light">Loading...</p>;
    if (store.error) return <p className="text-center text-danger">Error: {store.error}</p>;
    if (!store.selectedPlanet) return <p className="text-center text-warning">No se encontró el planeta</p>;

    const { name, population, climate, terrain, gravity, image } = store.selectedPlanet;

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card text-light bg-dark shadow-lg border border-warning" style={{ width: "24rem"}}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title text-warning">{name}</h2>
                    <p className="card-text"><strong>Población:</strong> {population}</p>
                    <p className="card-text"><strong>Clima:</strong> {climate}</p>
                    <p className="card-text"><strong>Terreno:</strong> {terrain}</p>
                    <p className="card-text"><strong>Gravedad:</strong> {gravity}</p>
                </div>
            </div>
        </div>
    );
};

export default PlanetById;

