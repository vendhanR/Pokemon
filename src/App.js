import React, { createContext, useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import About from "./component/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./component/PokemonDetails/PokemonDetails";
import axios from "axios";

export const PokeContext = createContext();

function App() {
  
  const [allpokemons, setAllPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokemonDetails, setPokemonDetails] = useState();
  const [next, setNext] = useState([true]);
  const [previous, setPrevious] = useState([]);
  const [loading, setLoading] = useState(true);

  //search pokemon 
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setpokemonName] = useState("");

  useEffect(() => {
    getPokemons();
  },[url]);

  const getPokemons = async () => {
    setLoading(true);
    const pokemonData = await axios.get(url).then((res) => res.data);
    setLoading(false);
    setNext(pokemonData.next);
    setPrevious(pokemonData.previous);
    getPokemon(pokemonData.results);
  };

  const getPokemon = (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setAllPokemons((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const searchPokemon = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon(res.data);
      });
  };

  return (
    <>
      <div className="app">
        <PokeContext.Provider
          value={{
            pokemonDetails,
            setPokemonDetails,
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
          }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/pokemonDetails" element={<PokemonDetails />} />
            </Routes>
            <About />
          </BrowserRouter>
        </PokeContext.Provider>
      </div>
    </>
  );
}

export default App;
