import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);

        //that's component state(React), not app's(Redux)
        this.state = { term: ''};

        // if you have a callback function, refering to 'this', you
        // usually need to bind it
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault(); //allways preventDefault when using form, so app doesn't rerender
        this.props.fetchWeather(this.state.term);
        this.setState({ 'term': '' })
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null is because we are not passing state(mapStateToProps), mapDispatch is allways second argument
export default connect(null, mapDispatchToProps)(SearchBar);