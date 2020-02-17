import React from "react";
import GamesList from "./gamesList";
import PropTypes from "prop-types";
import _orderBy from "lodash/orderBy";
import GameForm from "./GameForm";
import TopNavigation from "./TopNavigation";
import axios from 'axios';

// const publishers = [
//   {_id:1, name:"XPP"},
//   {_id:2, name: "In Design"}
// ]
// const games = undefined;
const games = [
  {
    _id: 1,
    featured: false,
    // publisher: 1,
    price: 32.99,
    description:
      "Age of Empires is a series of historical real-time strategy video games, originally developed by Ensemble Studios and published by Xbox Game Studios.",
    descView: false,
    thumbnail: "https://wallpapercave.com/wp/wp1826564.jpg",
    header: "Age of Empire",
    players: "2-3",
    duration: "30"
  },
  {
    _id: 2,
    featured: false,
    // publisher: 2,
    price: 10.99,
    description:
      "Battlegrounds is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people",
    descView: false,
    thumbnail: "https://wallpapercave.com/wp/wp2208672.jpg",
    header: "Pubg",
    players: "3-4",
    duration: "60"
  },
  {
    _id: 3,
    featured: true,
    // publisher: 1,
    price: 11.99,
    description:
      "Need for Speed (NFS) is a racing video game franchise published by Electronic Arts and currently developed by Ghost Games. The series centers around illicit street racing and in general tasks players to complete various types of races while evading the local law enforcement in police pursuits.",
    descView: false,
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
    games: [],
    showGameForm: false
  };

  componentDidMount() {

    // axios.get('/api/unsafegames')
    this.setState({
      games: this.orderBy(games)
    });
  }

  orderBy(games) {
    return _orderBy(games, ["featured", "header"], ["desc", "asc"]);
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

  descriptionView = description => {
    const descript = this.state.games.map(game => {
      if (game.description === description)
        return { ...game, descView: !game.descView };
      return game;
    });
    this.setState({
      games: this.orderBy(descript)
    });
  };
  showGameForm = () => this.setState({ showGameForm: true });
  hideGameForm = () => this.setState({ showGameForm: false });

  render() {
    const numberOfColumns = this.state.showGameForm ? "eleven" : "sixteen"
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />
        <div className="ui stackable grid">
            {this.state.showGameForm && (
            <div className="five wide column">
            <GameForm cancel={this.hideGameForm} /></div>)}
            
          <div className={`${numberOfColumns} wide column`}>
          <GamesList
            games={this.state.games}
            toggleFeatured={this.toggleFeatured}
            descriptionView={this.descriptionView}
          /></div>
        </div>

         {/* <GameForm  publisher={publishers}/> */}
        <br />
      </div>
    );
  }
}

games.propTypes = {
  games: PropTypes.object.isRequired
};
export default App;
