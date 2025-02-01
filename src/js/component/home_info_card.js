import React from "react";

export const HomeInfoCard = ({ image, name, url }) => {
    return (
        <div className="card shadow-sm border-0 rounded" style={{ width: "18rem" }}>
            <img
                src={image}
                className="card-img-top rounded-top img-fluid"
                alt={`Imagen de ${name}`}
                style={{ objectFit: "cover", height: "200px" }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Ver más
                </a>
            </div>
        </div>
    );
};
