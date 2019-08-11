import React, { useState } from "react";

import "./App.css";

import search from "./assets/search.svg";
import x from "./assets/x.svg";
import downArrow from "./assets/down-arrow.svg";
import upArrow from "./assets/up-arrow.svg";

function App() {
  const [citieSearch, setCitieSearch] = useState(true);
  const cities = [
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    },
    {
      tempmin: 18,
      tempmax: 22,
      citie: "Rio de Janeiro"
    }
  ];

  return (
    <div className="main-container">
      <h1>Previsão do tempo</h1>

      {citieSearch && (
        <div className="citie-card">
          <div className="citie-header">
            <p>Niterói, Rj - Brasil</p>
            <button type="button" onClick={() => setCitieSearch(false)}>
              <span>
                <img src={x} alt="Close" />
              </span>
            </button>
          </div>

          <div className="citie-body">
            <h1>20°C Nublado</h1>
            <div className="grid-stats">
              <div>
                <span>
                  <img src={downArrow} alt="Down Arrow" /> 16°{" "}
                  <img src={upArrow} alt="Up Arrow" /> 25°
                </span>
              </div>
              <div>
                Sensação <span>19°C</span>
              </div>
              <div>
                Vento <span>18km/h</span>
              </div>
              <div>
                Humidade <span>89%</span>
              </div>
            </div>
          </div>

          <div className="citie-footer">
            <div className="week-grid">
              <div className="day-grid">
                <div>
                  <p>Terça</p>
                </div>
                <div>
                  <span>18° 26°</span>
                </div>
              </div>
              <div className="day-grid">
                <div>
                  <p>Terça</p>
                </div>
                <div>
                  <span>18° 26°</span>
                </div>
              </div>
              <div className="day-grid">
                <div>
                  <p>Terça</p>
                </div>
                <div>
                  <span>18° 26°</span>
                </div>
              </div>
              <div className="day-grid">
                <div>
                  <p>Terça</p>
                </div>
                <div>
                  <span>18° 26°</span>
                </div>
              </div>
              <div className="day-grid">
                <div>
                  <p>Terça</p>
                </div>
                <div>
                  <span>18° 26°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="form-container">
        <form>
          <div>
            <input placeholder="Insira aqui o nome da cidade" />
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

          {cities.map(citie => (
            <div className="temp-grid">
              <div>
                <p>{citie.tempmin}°</p>
              </div>
              <div>
                <p>{citie.tempmax}°</p>
              </div>
              <div>
                <p>{citie.citie}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
