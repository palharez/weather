import React, { useState, useEffect } from "react";

import "./App.css";

import search from "./assets/search.svg";
import x from "./assets/x.svg";
import downArrow from "./assets/down-arrow.svg";
import upArrow from "./assets/up-arrow.svg";
import { getLocationTemp } from "./api";

function App() {
  const state = {};
  const [citieSearch, setCitieSearch] = useState(false);
  const [capitals, setCapitals] = useState([]);
  const capitalsToSearch = [
    "Rio de Janeiro",
    "São Paulo",
    "Belo Horizonte",
    "Brasília",
    "Belém",
    "Salvador",
    "Curitiba",
    "Fortaleza",
    "Manaus",
    "João Pessoa"
  ];

  let capitalsSearching = [];

  const getCapitals = capitalsToSearch => {
    capitalsToSearch.map(capital =>
      getLocationTemp(capital).then(response => {
        capitalsSearching = [
          ...capitalsSearching,
          { capital, ...response.forecasts[0] }
        ];
        setCapitals(capitalsSearching);
      })
    );
  };

  useEffect(() => {
    if (!capitals.length) {
      getCapitals(capitalsToSearch);
    }
  });

  const getLocation = location => {
    setCitieSearch(false);
    getLocationTemp(location).then(response => {
      setCitieSearch(response);
    });
  };

  const handleSubmit = event => {
    getLocation(event.target.citie.value);
    event.preventDefault();
  };

  return (
    <div className="main-container">
      <h1>Previsão do tempo</h1>

      {citieSearch && (
        <div className="citie-card">
          <div className="citie-header">
            <p>
              {citieSearch.location.city}, {citieSearch.location.region} -{" "}
              {citieSearch.location.country}
            </p>
            <button type="button" onClick={() => setCitieSearch(false)}>
              <span>
                <img src={x} alt="Close" />
              </span>
            </button>
          </div>

          <div className="citie-body">
            <h1>
              {citieSearch.current_observation.condition.temperature}°C{" "}
              {citieSearch.current_observation.condition.text}
            </h1>
            <div className="grid-stats">
              <div>
                <span>
                  <img src={downArrow} alt="Down Arrow" />{" "}
                  {citieSearch.forecasts[0].low}°{" "}
                  <img src={upArrow} alt="Up Arrow" />{" "}
                  {citieSearch.forecasts[0].high}°
                </span>
              </div>
              <div>
                Sensação{" "}
                <span>{citieSearch.current_observation.condition.code}°C</span>
              </div>
              <div>
                Vento{" "}
                <span>{citieSearch.current_observation.wind.speed}km/h</span>
              </div>
              <div>
                Humidade{" "}
                <span>
                  {citieSearch.current_observation.atmosphere.humidity}%
                </span>
              </div>
            </div>
          </div>

          <div className="citie-footer">
            <div className="week-grid">
              {citieSearch.forecasts
                .filter(function(currentValue, index) {
                  return index > 0 && index < 6;
                })
                .map((citie, index) => (
                  <div className="day-grid" key={index}>
                    <div>
                      <p>{citie.day}</p>
                    </div>
                    <div>
                      <span>
                        {citie.low}° {citie.high}°
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Insira aqui o nome da cidade"
              name="citie"
              value={state.citie}
            />
            <button>
              <img src={search} alt="Search" />
            </button>
          </div>
        </form>
      </div>

      <div className="sepair-container" />

      <div className="capitals-container">
        <h2>Capitais</h2>

        <div className="temps-grid">
          <div className="temp-grid">
            <div>
              <span>Min</span>
            </div>
            <div>
              <span>Máx</span>
            </div>
            <div />
          </div>

          <div className="temp-grid">
            <div>
              <span>Min</span>
            </div>
            <div>
              <span>Máx</span>
            </div>
            <div />
          </div>

          {capitals.map((citie, index) => (
            <div className="temp-grid" key={index}>
              <div>
                <p>{citie.low}°</p>
              </div>
              <div>
                <p>{citie.high}°</p>
              </div>
              <div>
                <p>{citie.capital}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
