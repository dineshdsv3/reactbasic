import React from "react";
import GamesList from "./gamesList";
import PropTypes from "prop-types";
import _orderBy from "lodash/orderBy"



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
  state = {
    games:[]
  }

  componentDidMount() {
    this.setState( { games: _orderBy(games,["featured","header"],["desc","asc"]) })
  }
  
  toggleFeatured(gameId) {
    alert(gameId)
  }

  render() {

    return(
      <div className="ui container">
    <GamesList 
    games={this.state.games} 
    toggleFeatured = {this.toggleFeatured}/>
  </div>
    
  )
  }


}

games.propTypes = {
  games: PropTypes.object.isRequired
}
export default App;
