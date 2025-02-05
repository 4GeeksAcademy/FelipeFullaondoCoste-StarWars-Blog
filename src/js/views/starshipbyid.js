import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const StarshipById = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchStarshipById(id);
    }, [id]);

    if (store.loading) return <p className="text-center text-light">Loading...</p>;
    if (store.error) return <p className="text-center text-danger">Error: {store.error}</p>;
    if (!store.selectedStarship) return <p className="text-center text-warning">No se encontró la nave</p>;

    const { 
        name, model, starship_class, manufacturer, cost_in_credits, length, crew, passengers, 
        max_atmosphering_speed, hyperdrive_rating, MGLT, cargo_capacity, consumables, image 
    } = store.selectedStarship;

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card text-light bg-dark shadow-lg border border-warning" style={{ width: "28rem" }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title text-warning">{name}</h2>
                    <p className="card-text"><strong>Modelo:</strong> {model}</p>
                    <p className="card-text"><strong>Clase:</strong> {starship_class}</p>
                    <p className="card-text"><strong>Fabricante:</strong> {manufacturer}</p>
                    <p className="card-text"><strong>Costo:</strong> {cost_in_credits} créditos</p>
                    <p className="card-text"><strong>Longitud:</strong> {length} m</p>
                    <p className="card-text"><strong>Tripulación:</strong> {crew}</p>
                    <p className="card-text"><strong>Pasajeros:</strong> {passengers}</p>
                    <p className="card-text"><strong>Velocidad máxima:</strong> {max_atmosphering_speed}</p>
                    <p className="card-text"><strong>Hiperpropulsor:</strong> {hyperdrive_rating}</p>
                    <p className="card-text"><strong>MGLT:</strong> {MGLT}</p>
                    <p className="card-text"><strong>Capacidad de carga:</strong> {cargo_capacity} kg</p>
                    <p className="card-text"><strong>Consumo:</strong> {consumables}</p>
                </div>
            </div>
        </div>
    );
};

export default StarshipById;
