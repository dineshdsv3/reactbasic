import React from "react";
import GameCard from "./gameCard";
import Message from "./message";

const msg = {
    header: "There are no games in your cart",
    content: "Please add games to your cart",
    info :["info" ,"success", "error"]
}

const GamesList = ({ games, toggleFeatured }) => (
  <div className="ui four cards">
    {/* added Ternary operator of no games present in the cart */}
    {games.length === 0 ? (
        <Message msg={msg} />

    ) : (
        // iterating the games object and giving each game as a prop to gameCard
      games.map(game => <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id} />)
    )}
  </div>
);


GamesList.defaultProps = {
    games:[]
}

export default GamesList;
