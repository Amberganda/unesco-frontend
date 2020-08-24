import React, { Component } from "react";
import {
  updateFavoriteState,
  updateDestinationState,
  updateVisitedState,
} from "../actions";
import { connect } from "react-redux";
class Actions extends Component {
  handleOnClickFavorites = () => {
    this.props.updateFavoriteState(this.props.location.id);
  };
  handleOnClickDestinations = () => {
    this.props.updateDestinationState(this.props.location.id);
  };
  handleOnClickVisited = () => {
    this.props.updateVisitedState(this.props.location.id);
  };

  render() {
    return (
      <div className="card-action">
        <button
          onClick={this.handleOnClickFavorites}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i className="material-icons right">
            {this.props.location.favorite ? "favorite" : "favorite_border"}
          </i>
        </button>
        <button
          onClick={this.handleOnClickDestinations}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i className="material-icons right">
            {this.props.location.destination ? "add_box" : "add"}
          </i>
        </button>
        <button
          onClick={this.handleOnClickVisited}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i className="material-icons right">
            {this.props.location.visited ? "check_box" : "check"}
          </i>
        </button>
      </div>
    );
  }
}

export default connect(null, {
  updateFavoriteState,
  updateDestinationState,
  updateVisitedState,
})(Actions);
