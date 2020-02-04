import React from "react";

const GameCard = ({game}) => (
  <div className="ui card">
    <div className = "image">
        <span className="ui green ribbon label">${game.price}</span>
        <img src= {game.thumbnail}  alt="Game Cover"></img>
    </div>
    <div className = "content">
<a className="Header">{game.header}</a>
    <div className= "meta">
        <i className = "icon users"/> {game.players}  Players 
        <i className = "icon wait"/> {game.duration} Min
    </div>
    </div>
  </div>
);

export default GameCard;
