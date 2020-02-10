import React from 'react';

class GameForm extends React.Component{
    state = {
        name: ""
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleNameChange = (e) => {
        this.setState({name:e.target.value})
    }
    render() {
        return (
           <form className ="ui form" onSubmit={this.handleSubmit}>
               <div className= "field">
                   <label>Name</label> 
                   <input type="text" id="name" placeholder="Full game name" onChange={this.handleNameChange}/>
               </div>
               <button className="ui button" type="submit">Submit</button>
           </form>
        )
    }
}

export default GameForm;