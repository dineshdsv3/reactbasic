import React from "react";
import PropTypes from "prop-types";
import Price from "./price";
import Featured from "./featured";
import DescriptionView from "./DescriptionView";

const GameCard = ({ game, toggleFeatured, descriptionView }) => (
  <div className="ui card">
    <Price gamePrice={game} />
    <Featured
      featured={game.featured}
      toggleFeatured={toggleFeatured}
      gameId={game._id}
    />
    {!game.descView ? (
      <div className="image">
        <img src={game.thumbnail} alt="Game Cover"></img>
      </div>
    ) : (
      <div className="card">
      <p>{game.description} </p>
      </div>
    )}

    <div className="content">
      <a className="Header">{game.header}</a>
      <div className="meta">
        <i className="icon users" /> {game.players} Players
        <i className="icon wait" /> {game.duration} Min
        <DescriptionView 
        descriptionView={descriptionView}
        description = {game.description}
        descView = {game.descView} />
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
};

export default GameCard;
