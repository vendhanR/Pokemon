import React, { useContext} from "react";
import "./PokemonList.css";
import { PokeContext } from "../../App";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ id, image, name, type, pokemonStats }) => {

  const { setPokemonDetails } = useContext(PokeContext);
  const navigate = useNavigate();

  const handlePokemanDetails = (data) => {
    setPokemonDetails(data);
    navigate("/pokemonDetails");
  };
  return (
    <>
      
      <div className="p-3">
        <div className="pokemon-card">
          <p className="pokemon-id">#{id}</p>
          <img src={image} alt={name} />
          <p className="pokemon-name">{name}</p>
          <small>Type: {type}</small>
          <button className="btn-view" onClick={() => handlePokemanDetails(pokemonStats)}>view</button>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
