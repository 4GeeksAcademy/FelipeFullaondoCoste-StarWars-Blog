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
        <h1>Characters</h1>
        {store.dataPeople.map((person) => (
          <HomeInfoCard
            key={person.uid}
            image="asd"
            name={person.name}
            url={person.url}
          />
        ))}
      </div>
      <div className="container d-flex flex-column align-items-center">
        <h1>Planets</h1>
        {store.dataPlanets.map((planet) => (
          <HomeInfoCard
            key={planet.uid}
            image="asd"
            name={planet.name}
            url={planet.url}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
