import React from "react";
import PropTypes from 'prop-types';
import Price from './price';
import Featured from './featured';


const GameCard = ({game}) => (
  <div className="ui card">
    <div className = "image">
        <Price gamePrice={game}/>
        <Featured featured={game.featured}/>
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

GameCard.propTypes = {
  game: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired
}


export default GameCard;
