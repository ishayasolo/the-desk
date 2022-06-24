import React from "react"
import "./Offer.css"

const Offer = (props) => (
	<div className="offer" data-aos="zoom-in">
		<div className="photo-box">
			<img src={props.image} alt="" className="photo" />
		</div>
		<div className="text-box">
			<h3 className="offer-heading">{props.title}</h3>
			<p className="offer-desc">{props.desc}</p>
		</div>
	</div>
);

export default Offer;