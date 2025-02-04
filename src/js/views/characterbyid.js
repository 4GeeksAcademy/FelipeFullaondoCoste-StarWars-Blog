import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterById = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.fetchCharacterById(id);
    }, [id]);

    if (store.loading) return <p>Loading...</p>;
    if (store.error) return <p>Error: {store.error}</p>;
    if (!store.selectedCharacter) return <p>No se encontró el personaje</p>;

    const { name, height, mass, gender, birth_year } = store.selectedCharacter;

    return (
        <div className="container text-center">
            <h1>{name}</h1>
            <p><strong>Altura:</strong> {height} cm</p>
            <p><strong>Peso:</strong> {mass} kg</p>
            <p><strong>Género:</strong> {gender}</p>
            <p><strong>Año de nacimiento:</strong> {birth_year}</p>
        </div>
    );
};

export default CharacterById;
