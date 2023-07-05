import React, { useContext} from "react";
import PokemonList from "../PokemonList/PokemonList";
import "./Main.css";
import { PokeContext } from "../../App";
import Header from "../Header/Header";
import About from './../About/About';

const Main = () => {
  const {
    setpokemonName,
    searchPokemon,
    pokemon,
    pokemonName,
    loading,
    allpokemons,
    previous,
    next,
    setAllPokemons,
    setUrl,
  } = useContext(PokeContext);

  const handleSearch = () => {
    if (!pokemonName) return;
    console.log(searchPokemon());
  };

  return (
    <>
      <div>
      <Header />
        <div className="container-fluid serche-pokemon">
          <div className="search-wrapper">
            <input
              placeholder="Search..."
              onChange={(e) => {setpokemonName(e.target.value)}}
            />
            <div className="search-icon-container" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="loading">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {pokemon?.length !== 0 ? (
              <>
                <div className="container">
                  <div className="pokemon-list single-pokemon">
                    <PokemonList
                      pokemonStats={pokemon}
                      id={pokemon.id}
                      image={pokemon.sprites.other.dream_world.front_default}
                      name={pokemon.name}
                      type={pokemon.types[0].type.name}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="container">
                <div className="pokemon-list">
                  {allpokemons.map((pokemonStats) => {
                    return (
                      <PokemonList
                        pokemonStats={pokemonStats}
                        key={pokemonStats.id}
                        id={pokemonStats.id}
                        image={
                          pokemonStats.sprites.other.dream_world.front_default
                        }
                        name={pokemonStats.name}
                        type={pokemonStats.types[0].type.name}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div className="btn-Container">
              <div>
                {previous && (
                  <button
                    className="btn-previous"
                    onClick={() => {
                      setAllPokemons([]);
                      setUrl(previous);
                    }}
                  >
                    previous
                  </button>
                )}
                {next && (
                  <button
                    className="btn-next"
                    onClick={() => {
                      setAllPokemons([]);
                      setUrl(next);
                    }}
                  >
                    next
                  </button>
                )}
              </div>
            </div>
          </>
        )}
           <About />
      </div>
    </>
  );
};

export default Main;
