import React from "react";
import { connect } from "react-redux";

const Actions = () => {
  return (
    <div class="card-action">
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">send</i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">send</i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">send</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Actions);
