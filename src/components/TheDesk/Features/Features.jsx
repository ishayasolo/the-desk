import React from "react";
import "./Features.css";
import Feature from "./Feature/Feature";
import accessIcon from "../../../images/access-icon.svg";
import privateIcon from "../../../images/private-icon.svg";
import startupIcon from "../../../images/startup-icon.svg";
import accessibleIcon from "../../../images/accessible-icon.svg";

const Features = () => (
	<div className="features">
		<div className="features-parent">
			<div className="features-text-box">
				<h3 className="features-title" data-aos="fade-right" data-aos-duration="1000">Our solutions are designed to meet your needs</h3>
				<p className="features-desc" data-aos="fade-right" data-aos-duration="1000">
					The Desk co-working space is created with users’ absolute convenience in mind.
					Our space was consciously designed and built to constantly inspire problem solvers and give them access to top-notch amenities to ease their process of building sustainable businesses.
				</p>
			</div>

			<div className="feature-container">
				<div className="feature-row">
					<Feature
						featureIcon={accessIcon}
						featureTitle="24/7 Access"
						featureDesc="Our co-working facility is open every day of the week. Users are at liberty to work whenever and for however long it takes."
					/>
					<Feature
						featureIcon={privateIcon}
						featureTitle="Private Meeting Rooms"
						featureDesc="Our facility has provisions for meeting rooms of different sizes to allow users privacy for their business meetings."
					/>
				</div>
				<div className="feature-row" data-aos="zoom-in">
					<Feature
						featureIcon={startupIcon}
						featureTitle="Startup Friendly"
						featureDesc="All you have to do is focus on building and growing your business or getting your job done. A functional, ready to use space will be waiting each time you walk in."
					/>
					<Feature
						featureIcon={accessibleIcon}
						featureTitle="Accessibility"
						featureDesc="The Desk sits pretty on Ikorodu Road, Jibowu in Yaba. You will be working from the heart of Lagos tech ecosystem. It’s a great space for meetings too, our facility is easily accessible from anywhere in Lagos."
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Features;