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
                <div className="container mt-4">
                    <div className="row justify-content-center g-4">
                        {store.dataPeople.map((person) => (
                            <div key={person.uid} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                                <HomeInfoCard
                                    image={person.image}
                                    name={person.name}
                                    url={person.url}
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
