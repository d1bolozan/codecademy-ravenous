import { Component } from "react";
import "./SearchBar.css";

const sortByOptions = {
	"Best Match": "best_match",
	"Highest Rated": "rating",
	"Most Reviewd": "review_count",
};

export default class SearchBar extends Component {
	renderSortByOptions() {
		return Object.keys(sortByOptions).map((sortByOption, index) => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

	render() {
		return (
			<div className="searchBar">
				<div className="searchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="searchBar-fields">
					<input placeholder="Search Businesses" />
					<input placeholder="Where?" />
				</div>
				<div className="searchBar-submit">
					<a>Let's Go</a>
				</div>
			</div>
		);
	}
}
