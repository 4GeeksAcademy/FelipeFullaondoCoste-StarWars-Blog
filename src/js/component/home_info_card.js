import React from "react";
import { useNavigate } from "react-router";

export const HomeInfoCard = ({ image, name, url, type, id }) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${type}/${id}`);
    };

    return (
        <div className="card shadow-lg border-0 rounded-3" style={{ width: "18rem", cursor: "pointer" }} onClick={typeof url === "function" ? url : null}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                {typeof url === "string" ? (
                    <button onClick={handleClick} href={url} className="btn btn-warning">Ver más</button>
                ) : (
                    <button className="btn btn-warning">Explorar</button>
                )}
            </div>
        </div>
    );
};
