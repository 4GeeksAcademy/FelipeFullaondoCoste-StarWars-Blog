import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterById = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchCharacterById(id);
    }, [id]);

    if (store.loading) return <p className="text-center text-light">Loading...</p>;
    if (store.error) return <p className="text-center text-danger">Error: {store.error}</p>;
    if (!store.selectedCharacter) return <p className="text-center text-warning">No se encontró el personaje</p>;

    const { name, birth_year, gender, height, mass, skin_color, eye_color, image } = store.selectedCharacter;

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card text-light bg-dark shadow-lg border border-warning" style={{ width: "24rem" }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title text-warning">{name}</h2>
                    <p className="card-text"><strong>Año de nacimiento:</strong> {birth_year}</p>
                    <p className="card-text"><strong>Género:</strong> {gender}</p>
                    <p className="card-text"><strong>Altura:</strong> {height} cm</p>
                    <p className="card-text"><strong>Peso:</strong> {mass} kg</p>
                    <p className="card-text"><strong>Color de piel:</strong> {skin_color}</p>
                    <p className="card-text"><strong>Color de ojos:</strong> {eye_color}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterById;
