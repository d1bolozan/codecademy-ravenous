import React, { Component } from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

export default class BusinessList extends Component {
	render() {
		return (
			<div className="businessList">
				{this.props.businesses.map((business, index) => {
					return <Business key={index} business={business} />;
				})}
			</div>
		);
	}
}
