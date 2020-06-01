import React from 'react';
import './Tile.css';
import styled from 'styled-components';

let TileContainer = styled.div`
  width: 80%;
  display: block;
  margin: 10% auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to bottom, #171717, #000000);
  border-radius: 10px;
`;

let ImgCont = styled.div`
  width: 300px;
  overflow: hidden;
  display: flex;
  background-size: contain;
  border-radius: 5px;
  border: solid 1px black;
`;

let Explanation = styled.div`
  text-align: justify;
`;

function Tile(props) {

  return (
    <TileContainer>
      <h2>{props.tile.title}</h2>
      <span>&copy; {props.tile.copyright}</span>
      <p>Date: {props.tile.date}</p>
      <ImgCont>
        <img src={props.tile.url} alt="Astronomy Pic of the Day"/>
      </ImgCont>
      <Explanation>
        <p style={{fontSize: 1.5 + 'rem'}}>{props.tile.explanation}</p>
      </Explanation>
    </TileContainer>
  );
}

export default Tile;
