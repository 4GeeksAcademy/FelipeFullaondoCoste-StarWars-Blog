import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { HomeInfoCard } from "../component/home_info_card";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchData();
    }, []);

    if (store.loading) return <p>Loading...</p>;
    if (store.error) return <p>Error: {store.error}</p>;



    return (
        <>
            <div className="container d-flex flex-column align-items-center">
                <h1>Planets</h1>
                <div className="container mt-4">
                    <div className="row justify-content-center g-4">
                        {store.dataPlanets.map((planets) => (
                            <div key={planets.uid} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                                <HomeInfoCard
                                    image={planets.image}
                                    name={planets.name}
                                    url={planets.url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
