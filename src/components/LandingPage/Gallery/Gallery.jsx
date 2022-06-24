import React from "react";
import Card from "../Card/Card";

import image1 from "../../../images/01-desk.jpg";
import image2 from "../../../images/02-desk.jpg";
import image3 from "../../../images/03-desk.jpg";
import image4 from "../../../images/04-desk.jpg";
import image5 from "../../../images/05-desk.jpg";
import image6 from "../../../images/06-desk.jpg";
import image7 from "../../../images/07-desk.jpg";
import image8 from "../../../images/08-desk.jpg";

import "./Gallery.css";

const Gallery = () => (
	<div className="gallery" id="photos">
		<div className="text" data-aos="fade-down" data-aos-duration="1000">
			<h2 className="title">Our Gallery</h2>
			<div className="title-ruler"></div>
			<p className="description">We are launching Desk at Enov8, in Lekki phase 1 </p>
		</div>
		<div className="card-box" data-aos="fade-in" data-aos-duration="1000">
			<Card src={image1} />
			<Card src={image2} />
			<Card src={image3} />
			<Card src={image4} />
			<Card src={image6} />
			<Card src={image7} />
			<Card src={image8} />
			<Card src={image5} />
		</div>
	</div>
);

export default Gallery;