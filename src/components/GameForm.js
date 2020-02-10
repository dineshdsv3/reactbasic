import React from 'react';

class GameForm extends React.Component{
    state = {
        name: ""
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
           <form className ="ui form" onSubmit={this.handleSubmit}>
               <div className= "field">
                   <label>Name</label> 
                   <input type="text" id="name" placeholder="Game name" name="name" onChange={this.handleChange}/>
               </div>
               <div className= "field">
                   <label>Description</label> 
                   <textarea type="text" id="name" placeholder="Game description" name="description" onChange={this.handleChange}/>
               </div>
               <button className="ui button" type="submit">Submit</button>
           </form>
        )
    }
}

export default GameForm;