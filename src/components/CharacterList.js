import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"

const HomeLink = styled.div`
text-align:center;
height:20px;
width:150px;
background-color:grey;
border-radius: 50px;
margin-top:10px;
`;


export default function CharacterList() {
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res =>{
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(error => {
      console.log("Error, data not found", error)
    })
  }, []);


  return (
    <section className="character-list">
      <div className="link_conatiner">
        <HomeLink>
          <Link to="/" className="link_characters">Home</Link>
        </HomeLink>
      </div>
      <SearchForm/>
      <div>
        {characters.map(chars => {
          return (
            <div>
              <CharacterCard
              key={chars.id}
              name={chars.name}
              species={chars.species}
              gender={chars.gender}
              origin={chars.origin.name}
              status={chars.status}/>
            </div>
          )
        })}
      </div>
    </section>
  );
}
