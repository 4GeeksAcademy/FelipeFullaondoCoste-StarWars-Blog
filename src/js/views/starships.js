import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { InfoCard } from "../component/info_card";

const Starships = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchData();
    }, []);

    if (store.loading) return <p>Loading...</p>;
    if (store.error) return <p>Error: {store.error}</p>;


    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <div className="container mt-4">
                    <div className="row justify-content-center g-4">
                        {store.dataStarships.map((starship) => (
                            <div key={starship.uid} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                                <InfoCard
                                    key={starship.uid}
                                    image={starship.image}
                                    name={starship.name}
                                    url={starship.url}
                                    id={starship.uid}
                                    type="starships"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Starships;
