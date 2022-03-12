import React, { Component } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import Yelp from "../../util/Yelp";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((apiBusinesses) => {
      this.setState({ businesses: apiBusinesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
