import React, { useEffect, useState } from "react";

const Home = () => {
  const [dataPeople, setDataPeople] = useState(null);
  const [dataPlanets, setDataPlanets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const peopleData = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/people");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setDataPeople(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    peopleData();

    const planetsData = async () => {
      try {
        const response = await fetch("https://www.swapi.tech/api/planets");
        if (!response.ok) {
          throw new Error (`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container d-flex justify-content-center">
      <h1>Characters</h1>
      <pre>{JSON.stringify(dataPeople, null, 2)}</pre>
    </div>
  );
};

export default Home;
