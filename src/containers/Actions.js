import React, { Component } from "react";
class Actions extends Component {
  handleOnClickFavorites() {
    console.log("clicked");
  }

  render() {
    return (
      <div class="card-action">
        <button
          onClick={this.handleOnClickFavorites}
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i class="material-icons right">
            {this.props.location.favorite ? "favorite" : "favorite_border"}
          </i>
        </button>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i class="material-icons right">
            {this.props.location.destination ? "add_box" : "add"}
          </i>
        </button>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i class="material-icons right">
            {this.props.location.visited ? "check_box" : "check"}
          </i>
        </button>
      </div>
    );
  }
}

export default Actions;
