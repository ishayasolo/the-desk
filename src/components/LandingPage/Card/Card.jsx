import React from "react";

import "./Card.css";

const Card = (props) => (
	<div className="card">
		<img className="card-img" src={props.src} alt="the desk at enov8" />
	</div>
);

export default Card;