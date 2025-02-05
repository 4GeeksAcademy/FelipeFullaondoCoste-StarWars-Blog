import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router";

export const InfoCard = ({ image, name, type, id }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.id === id && fav.type === type);

    const handleClick = () => {
        navigate(`/${type}/${id}`);
    };

    return (
        <div className="card shadow-lg border-0 rounded-3" style={{ width: "18rem", cursor: "pointer" }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <button onClick={handleClick} className="btn btn-warning me-2">Ver más</button>
                <button
                    className="btn btn-outline-warning"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        actions.toggleFavorite({ id, name, type, image });
                    }}
                >
                    {isFavorite ? <FaHeart className="text-danger" /> : <FaRegHeart />}
                </button>
            </div>
        </div>
    );
};
