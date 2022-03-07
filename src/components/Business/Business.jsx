import React, { Component } from "react";
import "./Business.css";

export class Business extends Component {
	render() {
		const { business } = this.props;
		return (
			<div className="business">
				<div className="image-container">
					<img src={business.imageSrc} alt="" />
				</div>
				<h2>{business.name}</h2>
				<div className="business-information">
					<div className="business-address">
						<p>{business.address}</p>
						<p>{business.city}</p>
						<p>
							{business.state} {business.zipCode}
						</p>
					</div>
					<div className="business-reviews">
						<h3>{business.category}</h3>
						<h3 className="rating">{business.rating} stars</h3>
						<p>{business.reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
