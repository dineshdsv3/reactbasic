import React from "react";

const GameCard = ({game1}) => (
  <div className="ui card">
    <div className = "image">
        <span className="ui green ribbon label">${game1.price}</span>
        <img src= {game1.thumbnail}  alt="Game Cover"></img>
    </div>
    <div className = "content">
<a className="Header">{game1.header}</a>
    <div className= "meta">
        <i className = "icon users"/> {game1.players}  Players 
        <i className = "icon wait"/> {game1.duration} Min
    </div>
    </div>
  </div>
);

export default GameCard;
