import React from "react";
import "./Feature.css";

const Feature = (props) => (
	<div className="feature" data-aos="zoom-in" data-aos-duration="1000">
		<img className="feature-logo" src={props.featureIcon} alt="" />
		<h3 className="feature-title">{props.featureTitle}</h3>
		<p className="feature-desc">{props.featureDesc}</p>
	</div>
);

export default Feature;