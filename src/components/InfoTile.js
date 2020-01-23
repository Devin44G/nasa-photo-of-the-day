import React from 'react';
import './Tile.css';

function Tile(props) {

  return (
    <div className="tile-container">
      <h2>{props.tile.title}</h2>
      <span>&copy; {props.tile.copyright}</span>
      <p>Date: {props.tile.date}</p>
      <div className="img">
        <img src={props.tile.url} alt="Astronomy Pic of the Day"/>
      </div>
      <div className="exp">
        <p>{props.tile.explanation}</p>
      </div>
    </div>
  );
}

export default Tile;
