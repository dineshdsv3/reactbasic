import React from "react";

class GameForm extends React.Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: true
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  };

  handleCheckChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Game name"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            type="text"
            id="name"
            placeholder="Game description"
            name="description"
            onChange={this.handleChange}
          />
        </div>
        <div className="three fields">
          <div className="field">
            <label>Price</label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Duration</label>
            <input
              type="number"
              id="duration"
              placeholder="Duration"
              name="duration"
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label>Players</label>
            <input
              type="text"
              id="text"
              placeholder="players"
              name="players"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="inline field">
          <input
            type="checkbox"
            checked={this.state.featured}
            name="featured"
            onChange={this.handleCheckChange}
          />
          <label>featured?</label>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default GameForm;
