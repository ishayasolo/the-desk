import React from "react";
import "./WhyTheDesk.css";

const WhyTheDesk = () => (
	<div id="about" className="about">
		<div className="about-content">
			<div className="about-text-box">
				<h1 className="about-message" data-aos="fade-right" data-aos-duration="1000">Why The Desk?</h1>
				<p className="about-description" data-aos="fade-right" data-aos-duration="1000">
					The Desk workspace is designed to bring people and businesses together.
					We are a platform for this community to grow their business and connect with others.
				</p>
			</div>
			<div className="image-container" data-aos="zoom-in" data-aos-duration="500">
				<div className="caption">
					<h4 className="image-caption-heading" >
						Our facility is designed to inspire solutions and enhance productivity
					</h4>
					<p className="image-caption">
						We host a community of tech startups in need of a convenient, functional and inspiring workspace for their daily and periodic official needs. We take care of everything to make you comfortable, allowing you to work and have meetings productively.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default WhyTheDesk;