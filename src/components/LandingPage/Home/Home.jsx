import React from "react";

import "./Home.css";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import Info from '../Info/Info';
import Footer from "../Footer/Footer";

const Home = () => {
	// setTimeout(() => {
	// 	const modal = document.getElementById("modal");
	// 	modal.classList.add("show-modal");
	// 	document.body.style.overflowY = "hidden";
	// 	document.getElementById("overlay").style.display = "block";
	// }, "3000");

	// const closeBtn = () => {
	// 	const modal = document.getElementById("modal");
	// 	modal.classList.remove("show-modal");
	// 	document.body.style.overflowY = "scroll";
	// 	document.getElementById("overlay").style.display = "none";
		
	// }

	return (
		<div className="home">
			{/* <div id="overlay"></div>
			<div class="modal" id="modal">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content" data-aos="zoom-in">
						<button className="close-btn" onClick={closeBtn}>X</button>
						<a className="promo-cta" href="https://docs.google.com/forms/d/1pnr7-T9KfDzXKDSIJLrLtAEB1VKKA6V1cx2X1oQ61W0/edit" target="_blank" rel="noopener noreferrer" onClick={closeBtn}>Get free access</a>
					</div>
				</div>
			</div> */}
			<Hero />
			<Gallery />
			<Info />
			<Footer />
		</div>
	);
}

export default Home;