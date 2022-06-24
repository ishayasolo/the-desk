import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import WhyTheDesk from "../WhyTheDesk/WhyTheDesk";
import Offer from "../Offer/Offer";
import topFloor from "../../../images/top-floor.jpg";
import boardRoom from "../../../images/board-room.jpg";
import coliseum from "../../../images/coliseum.jpg";
import Features from "../Features/Features";
import PlansAndPricing from "../PlansAndPricing/PlansAndPricing";

const Home = () => (
	<div className="home">
		<Hero />
		<WhyTheDesk />
		<div className="offers-parent">
			<div className="offers-container">
				<span className="offers-text">
					<h3 className="intro" data-aos="fade-right" data-aos-duration="1000">Our Offerings & Core Values</h3>
					<p className="about-offer" data-aos="fade-right" data-aos-duration="1000">We offer flexible term, full-service workspaces to meet your needs</p>
				</span>
				<div className="offers">
					<Offer
						image={topFloor}
						title="The Desk"
						desc="convenient co-working space suitable for individuals and groups."
					/>
					<Offer
						image={boardRoom}
						title="Meeting Rooms"
						desc="Serviced spaces for meeting suitable for interviews, business meetings, conference calls and trainings."
					/>
					<Offer
						image={coliseum}
						title="Training Space; The Coliseum"
						desc="Flexible spaces for trainings and meetings."
					/>
				</div>
			</div>
		</div>
		<Features />
		<PlansAndPricing />
		<Footer />
	</div>
);

export default Home;