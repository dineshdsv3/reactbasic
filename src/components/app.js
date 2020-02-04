import React from "react";
import GamesList from "./gamesList";

const games = [
  {
    _id: 1,
    price: 32.99,
    thumbnail: "https://wallpapercave.com/wp/wp1826564.jpg",
    header: "Age of Empire",
    players: "2-3",
    duration: "30"
  },
  {
    _id: 2,
    price: 10.99,
    thumbnail: "https://wallpapercave.com/wp/wp2208672.jpg",
    header: "Pubg",
    players: "3-4",
    duration: "60"
  },
  {
    _id: 3,
    price: 11.99,
    thumbnail: "https://wallpapercave.com/wp/k6fdpmv.jpg",
    header: "NFS Most Wanted",
    players: "4-6",
    duration: "40"
  }
];

const App = () => (
  <div className="ui container">
    <GamesList games={games} />
  </div>
);

export default App;
