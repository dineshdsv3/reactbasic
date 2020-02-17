import React from "react";
import ReactImageFallBack from "react-image-fallback";
import PropTypes from 'prop-types';
import FormInlineMessage from "./FormInlineMessage";

// const tags = [
//   { _id: 1, name: "Mobile" },
//   { _id: 2, name: "PC" },
//   { _id: 3, name: "Action" }
// ];

// const genres = [
//   { _id: 1, name: "American" },
//   { _id: 2, name: "Euro" },
//   { _id: 3, name: "Russian" }
// ];

class GameForm extends React.Component {
  state = {
    data:{

      
      name: "",
      description: "",
      price: 0,
      duration: 0,
      players: "",
      featured: true,
      thumbnail: ""
    },
    // tags: [],
    // genre: 1,
    // publisher: 0
    errors: {
      // name: "This field can't be left blank",
      // duration: "This field can't be left blank"
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };

  handleChange = e => {
    this.setState({ data : {...this.state.data ,[e.target.name]: e.target.value }});
  };

  handleNumberChange = e => {
    this.setState({ data: {...this.state.data, [e.target.name]: parseInt(e.target.value) }});
  };

  handleCheckChange = e => {
    this.setState({ data: {...this.state.data, [e.target.name]: e.target.checked} });
  };
  // toggleTag = tag => {
  //   this.state.tags.includes(tag._id)
  //     ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id) })
  //     : this.setState({ tags: [...this.state.tags, tag._id] });
  // };
  // handleGenreChange = genre => {
  //   this.setState({ genre: genre._id });
  // };

  render() {
    const {data, errors} = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? "field error": "field"}>
              <label>Name</label>
              <input
                type="text"
                id="name"
                placeholder="Game name"
                name="name"
                onChange={this.handleChange}
              />
              <FormInlineMessage content={errors.name} type= "error"/>
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
          </div>
          <div className="four wide column">
            <ReactImageFallBack
              src={this.state.data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>
        <div className={errors.thumbnail ? "field error": "field"}>
          <label>Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            placeholder="Game Image"
            name="thumbnail"
            onChange={this.handleChange}
          />
           <FormInlineMessage content={errors.thumbnail} type= "error"/>
        </div>
        <div className="three fields">
        <div className={errors.price ? "field error": "field"}>
            <label>Price</label>
            <input
              type="number"
              id="price"
              placeholder="Price"
              name="price"
              onChange={this.handleNumberChange}
            />
             <FormInlineMessage content={errors.price} type= "error"/>
          </div>
          <div className={errors.duration ? "field error": "field"}>
            <label>Duration</label>
            <input
              type="number"
              id="duration"
              placeholder="Duration"
              name="duration"
              onChange={this.handleNumberChange}
            />
             <FormInlineMessage content={errors.duration} type= "error"/>
          </div>
          <div className={errors.players ? "field error": "field"}>
            <label>Players</label>
            <input
              type="text"
              id="text"
              placeholder="players"
              name="players"
              onChange={this.handleChange}
            />
             <FormInlineMessage content={errors.players} type= "error"/>
          </div>
        </div>
        <div className="inline field">
          <input
            type="checkbox"
            checked={this.state.data.featured}
            name="featured"
            onChange={this.handleCheckChange}
          />
          <label>featured?</label>
        </div>
        {/* <div className="field">
          <label>Tags</label>
          {tags.map(tag => (
            <div key={tag._id} className="inline field">
              <input
                name={tag.name}
                type="checkbox"
                checked={this.state.tags.includes(tag._id)}
                onChange={() => this.toggleTag(tag)}
              />
              <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label>Genres</label>
          {genres.map(genres => (
            <div key={genres._id} className="inline field">
              <input
                id={genres._name}
                type="radio"
                checked={this.state.genre === genres._id}
                onChange={() => this.handleGenreChange(genres)}
              />
              <label htmlFor={genres.name}>{genres.name}</label>
            </div>
          ))}
        </div>
        <div className="field">
          <label>Publisher</label>
          <select
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleNumberChange}
          >
            <option value="0">Select a publisher</option>
            {this.props.publisher.map(publisher => (
              <option key={publisher._id} value={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div> */}
        <div className="ui fluid buttons">
          <button className="ui primary button" type="submit">
            Create
          </button>
          <div className="or"> </div>
          <a className="ui button" onClick={this.props.cancel}>Cancel</a>
        </div>
      </form>
    );
  }
}

GameForm.propTypes = {
  cancel: PropTypes.func.isRequired
}

export default GameForm;
