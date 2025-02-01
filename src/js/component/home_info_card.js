import React from "react";

export const HomeInfoCard = ({ image, name, url }) => {
    return (
        <div className="card shadow-lg border-0 rounded-3" style={{ width: "18rem", cursor: "pointer" }} onClick={typeof url === "function" ? url : null}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                {typeof url === "string" ? (
                    <button href={url} className="btn btn-warning">Ver más</button>
                ) : (
                    <button className="btn btn-warning">Explorar</button>
                )}
            </div>
        </div>
    );
};
