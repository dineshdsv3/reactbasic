import React from "react";
import { render } from "react-dom";

import GameCard from "./components/gameCard";

import "semantic-ui-css/semantic.min.css";

const games = [
  {
    price: 32.99,
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71IrSNm-WKL._AC_SX522_.jpg",
    header: "Quadrapolis",
    players: "2-3",
    duration: "30"
  },
  {
    price: 10.99,
    thumbnail:
      "https://wallpapercave.com/wp/wp2208672.jpg",
    header: "Pubg",
    players: "3-4",
    duration: "60"
  },
  {
    price: 11.99,
    thumbnail: "https://wallpapercave.com/wp/k6fdpmv.jpg",
    header: "NFS Most Wanted",
    players: "4-6",
    duration: "40"
  }
];

render(<GameCard game1={games[1]} />, document.getElementById("root"));
