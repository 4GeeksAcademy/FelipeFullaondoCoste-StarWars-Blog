import React from "react";


export const HomeInfoCard = ({ image, name, url }) => {

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a href={url} className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </>
    );
};