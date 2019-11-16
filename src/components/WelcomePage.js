import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterLink = styled.div`
text-align:center;
height:20px;
width:150px;
background-color:grey;
border-radius: 50px;

`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
          <div className="link_conatiner">
            <CharacterLink>
              <Link to="/characters" className="link_characters"> View all characters </Link>
            </CharacterLink>   
              <Link to="/searchforms" className="link_search">Search Characters</Link>
          </div>      
      </header>
    </section>
  );
}
