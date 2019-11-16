import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
 
  const [data, setData] = useState([]);

  const [query, setQuery] = useState('');

    useEffect(() => {
      Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then (res => {
        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      }, [query]);

    const handleChange = event => {
      setQuery(event.target.value);
    }

  return (
    <section>
      <Link to="/" className="link_search">Home</Link>
     <form className="search-form">
        <input
          className="search_bar"
          type="text"
          placeholder="Search names..." 
          onChange={handleChange} 
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      {data.map(chars => {
          return (
              <CharacterCard
              key={chars.id}
              name={chars.name}
              species={chars.species}
              gender={chars.gender}
              origin={chars.origin.name}
              status={chars.status}/>
          )
        })}
    </section>
  );
}
