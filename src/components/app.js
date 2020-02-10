import React from "react";
import GamesList from "./gamesList";
import PropTypes from "prop-types";
import _orderBy from "lodash/orderBy";

// const games = undefined;
const games = [
  {
    _id: 1,
    featured: false,
    price: 32.99,
    thumbnail: "https://wallpapercave.com/wp/wp1826564.jpg",
    header: "Age of Empire",
    players: "2-3",
    duration: "30"
  },
  {
    _id: 2,
    featured: false,
    price: 10.99,
    thumbnail: "https://wallpapercave.com/wp/wp2208672.jpg",
    header: "Pubg",
    players: "3-4",
    duration: "60"
  },
  {
    _id: 3,
    featured: true,
    price: 11.99,
    thumbnail: "https://wallpapercave.com/wp/k6fdpmv.jpg",
    header: "NFS Most Wanted",
    players: "4-6",
    duration: "40"
  }
];

class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     games:[]
  //   }
        // First way of binding an function
  //   this.toggleFeatured = this.toggleFeatured.bind(this);
  // }
  
  
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.orderBy(games)
    });
  }

  orderBy(games) {
   return _orderBy(games, ["featured", "header"], ["desc", "asc"])
  }

  // Here in the toggleFeatured we have binded using the JS class property as a arrow function
  // this binding is doing in a advanced javascript way
  // second way of binding a function
  toggleFeatured = gameId => {
    const newGames = this.state.games.map(game => {
      if (game._id === gameId) return { ...game, featured: !game.featured };
      return game;
    });
    this.setState({
      games: this.orderBy(newGames)
    });
  };

  render() {
    return (
      <div className="ui container">
        <GamesList
          games={this.state.games}
          toggleFeatured={this.toggleFeatured}
        />
      </div>
    );
  }
}

games.propTypes = {
  games: PropTypes.object.isRequired
};
export default App;
