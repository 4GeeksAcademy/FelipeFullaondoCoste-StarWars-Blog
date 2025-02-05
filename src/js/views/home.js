import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeInfoCard } from "../component/home_info_card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="text-warning mb-4">Explore the Galaxy</h1>
      <div className="row justify-content-center g-4">

        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <HomeInfoCard
            image="https://starwars-visualguide.com/assets/img/categories/character.jpg"
            name="Characters"
            url={() => navigate("/characters")}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <HomeInfoCard
            image="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
            name="Planets"
            url={() => navigate("/planets")}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
          <HomeInfoCard
            image="https://starwars-visualguide.com/assets/img/categories/starships.jpg"
            name="Starships"
            url={() => navigate("/starships")}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
