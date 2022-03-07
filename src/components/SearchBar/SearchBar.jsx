import { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: "",
			location: "",
			sortBy: "best_match",
		};

		this.sortByOptions = {
			"Best Match": "best_match",
			"Highest Rated": "rating",
			"Most Reviewd": "review_count",
		};

		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	getSortByClass(sortByOption) {
		return this.state.sortBy === sortByOption ? "active" : "";
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption,
		});
	}

	handleTermChange(event) {
		this.setState({
			term: event.target.value,
		});
	}
	handleLocationChange(event) {
		this.setState({
			location: event.target.value,
		});
	}

	handleSearch(event) {
		this.props.searchYelp(
			this.state.term,
			this.state.location,
			this.state.sortBy
		);
		event.preventDefault();
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map((sortByOption) => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return (
				<li
					className={this.getSortByClass(sortByOptionValue)}
					onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
					key={sortByOptionValue}
				>
					{sortByOption}
				</li>
			);
		});
	}

	render() {
		return (
			<div className="searchBar">
				<div className="searchBar-sort-options">
					<ul>{this.renderSortByOptions()}</ul>
				</div>
				<div className="searchBar-fields">
					<input
						placeholder="Search Businesses"
						onChange={this.handleTermChange}
						value={this.state.term}
					/>
					<input
						placeholder="Where?"
						onChange={this.handleLocationChange}
						value={this.state.location}
					/>
				</div>
				<div className="searchBar-submit">
					<span onClick={this.handleSearch}>Let's Go</span>
				</div>
			</div>
		);
	}
}
