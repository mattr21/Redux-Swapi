import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChars()
  }

  render() {
    if (this.props.fetching) {
      <p>...Data is fetching...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.isFetching,
  error: state.error
})



export default connect(
  mapStateToProps,
  {
    getChars
  }
)(CharacterListView);
