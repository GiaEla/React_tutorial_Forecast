import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        //that's component state(React), not app's(Redux)
        this.state = { term: ''};

        // if you have a callback function, refering to 'this', you
        // usually need to bind it
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault(); //allways preventDefault when using form, so app doesn't rerender
    }

    render(){
        return(
          <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                placeholder="Enter city"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary"> Search </button>
              </span>
          </form>
        );
    }
}