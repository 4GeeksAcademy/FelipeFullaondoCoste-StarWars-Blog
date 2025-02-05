import React from "react";
import { useNavigate } from "react-router";

export const HomeInfoCard = ({ image, name, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (typeof url === "function") {
            url();
        }
    };

    return (
        <div className="card shadow-lg border-0 rounded-3" style={{ width: "18rem", cursor: "pointer" }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <button className="btn btn-warning" onClick={handleClick}>Explorar</button>
            </div>
        </div>
    );
};
