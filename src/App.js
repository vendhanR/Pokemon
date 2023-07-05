import React, { createContext, useEffect, useState } from "react";
import Main from "./component/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./component/PokemonDetails/PokemonDetails";
import axios from "axios";
import Error from "./component/Error/Error";

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
    try {
      await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon(res.data);
      });
    } catch (error) {
      console.log(error.response.data)
    }
    
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
            
            <Routes>
              <Route path="/pokemon" element={<Main />} />
              <Route path="/pokemonDetails" element={<PokemonDetails />} />
              <Route path="*" element={<Error />} />
            </Routes>
              
         
          </BrowserRouter>
        </PokeContext.Provider>
      </div>
    </>
  );
}

export default App;
