import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
text-align:center;
height:200px;
width: 200px;
background-color:grey;
border-radius: 50px;
`;

const CharacterCard = props => {
  return(
    <div className="card_container">
      <CardDiv>
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <p>{props.origin}</p>
        <p>{props.status}</p>
      </CardDiv>
    </div>
  );
}

export default CharacterCard;