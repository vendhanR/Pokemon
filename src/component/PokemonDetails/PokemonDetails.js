import React, { useContext } from "react";
import { PokeContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./PokemonDetails.css";

const PokemonDetails = () => {

  const { pokemonDetails} = useContext(PokeContext);
  const { stats, abilities, sprites } = pokemonDetails || {};
  const navigate = useNavigate();
  
  return (
    <>
      {pokemonDetails ? (
        <>
          <button className="back-btn" onClick={() => { navigate("/")}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="36"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>

             <div className="details-container">
              <div className="abilities">
                  <h2 className="ability-heading">abilities</h2>
                  {abilities.map(({ ability },index) => {
                    return  <p className="ability-content" key={index}>{ability.name}</p>
                  })}
              </div>
              <div className="pokemon-img-container">
                <img className="pokemon-img" src={sprites.other.dream_world.front_default} alt="img"/>
              </div>
              
              <div className="stats-container">
                <div className="stat-heading">stats</div>
                {stats.map(({ stat, base_stat },index) => {
                  return (
                    <div className="stats" key={index}>
                     <p>{stat.name}</p>
                     <p> : {base_stat}</p>
                    </div>
                  ); 
                })}
              </div>
            
          </div>
        </>
      ) : (
        <div className="null-content">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="back-content" onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            please chose Pokemon
          </p>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;