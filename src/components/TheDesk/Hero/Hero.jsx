import React from "react";
import Particles from "react-tsparticles";
import "./Hero.css";
import NavBar from "../../NavBar/NavBar";

const Hero = () => (
	<div className="hero" id="home">
		<Particles
			canvasClassName="example"
			options={{
				fullScreen: false,
				backgroundMode: {
					enable: true,
					zIndex: 0,
				},
				particles: {
					number: {
						value: 150,
						limit: 200,
						density: {
							enable: true,
							value_area: 1000
						}
					},
					color: {
						value: "#ddd"
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#000000"
						},
						polygon: {
							nb_sides: 5
						},
						image: {
							src: "images/github.svg",
							width: 100,
							height: 100
						}
					},
					opacity: {
						value: 0.5,
						random: true,
						anim: {
							enable: true,
							speed: 1,
							opacity_min: 0.5,
							sync: false
						}
					},
					size: {
						value: 0,
						random: true,
						anim: {
							enable: true,
							speed: 10,
							size_min: 7,
							sync: false
						}
					},
					line_linked: {
						enable: true,
						distance: 100,
						color: "#ddd",
						opacity: 0.7,
						width: 1
					},
					move: {
						enable: true,
						speed: 0.4,
						direction: "none",
						random: false,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: false,
							rotateX: 600,
							rotateY: 1200
						}
					}
				}
			}}
		/>

		<NavBar
			link0="Terms of Use"
			link0Ref="/termsOfUse"
			link1="About"
			link1Ref="#about"
			link2="Plans"
			link2Ref="#plans"
			link3Ref="https://docs.google.com/forms/d/e/1FAIpQLSeaHPZHXj95hG7kxcR1LUmaNKrfe0EHTZnr79D_wuAWK3t0oA/viewform"
		/>

		<div className="hero-content">
			<div className="hero-text-box">
				<h1 className="hero-message" data-aos="fade-right" data-aos-duration="1000">Accessible, convenient, and functional workspaces.</h1>
				<a target="_blank" rel="noopener noreferrer" className="hero-cta" data-aos="zoom-out" data-aos-duration="1000" href="https://docs.google.com/forms/d/e/1FAIpQLSeaHPZHXj95hG7kxcR1LUmaNKrfe0EHTZnr79D_wuAWK3t0oA/viewform">Book a space now!</a>
			</div>
			<div className="hero-youtube" data-aos="flip-left" data-aos-duration="1000">
				{/* youtube video */}
				<iframe className="youtube" width="500" height="280" src="https://www.youtube-nocookie.com/embed/7xU6BA3o5cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
	</div>
);

export default Hero;