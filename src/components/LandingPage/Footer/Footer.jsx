import React from "react";

import "./Footer.css";

const Footer = () => (
	<div className="footer" id="contactUs">
		<h3 style={{fontWeight: "500", color: "#fff"}}>Contact Us</h3>
		<div className="contact-info">
			<div className="footer-child" data-aos="zoom-in" data-aos-duration="500">
				<a target="_blank" rel="noopener noreferrer" href="/" className="footer-link address-name">Enov8 Solutions</a><br />
				<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/m65rAdh9jSRx2FE97" className="footer-link"><address>5A, Awudu Ekpekha, Blvd St, Eti-Osa, Lekki, Lagos</address></a><br />
				<a target="_blank" rel="noopener noreferrer" href="+2348183377167" className="footer-link">+234 818 337 7167</a><br />
				<a target="_blank" rel="noopener noreferrer" href="mailto:info@enov8solutions.tech?subject=Inquiry%20about%20The%20Desk" className="footer-link">info@enov8solutions.tech</a>
			</div>
			<div className="footer-child" data-aos="zoom-in" data-aos-duration="500">
				<a target="_blank" rel="noopener noreferrer" href="/thebulb" className="footer-link address-name">The Bulb Africa</a><br />
				<a target="_blank" rel="noopener noreferrer" href="https://g.page/the-bulb-africa?share" className="footer-link"><address>5A, Awudu Ekpekha, Blvd St, Eti-Osa, Lekki, Lagos</address></a><br />
				<a target="_blank" rel="noopener noreferrer" href="+2347008432852" className="footer-link">+234 700 843 2852</a><br />
				<a target="_blank" rel="noopener noreferrer" href="mailto:desk.thebulb.africa?subject=Inquiry" className="footer-link">desk.thebulb.africa</a>
			</div>
		</div>
		<div className="footer-child">
			<small className="copy">copyright &copy; 2022 <a target="_blank" rel="noopener noreferrer" href="https://thebulb.africa" className="footer-link">The Bulb Africa</a></small>
		</div>
	</div>
);

export default Footer;