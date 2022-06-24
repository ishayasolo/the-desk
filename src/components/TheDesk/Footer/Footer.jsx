import React from "react";
import "./Footer.css";
import footerLogo from "../../../images/footer-logo.svg";
import facebook from "../../../images/facebook.svg"
import twitter from "../../../images/twitter.svg"
import instagram from "../../../images/instagram.svg"
import linkedin from "../../../images/linkedin.svg"
import youtube from "../../../images/youtube.svg"
import { Link } from "react-router-dom";

const Footer = () => (
	<div className="desk-footer">
		<div className="desk-footer-box">
			<div className="copyright">
				<span>Copyright &copy; 2022.</span>
				<span className="footer-logo-span">
					<img src={footerLogo} alt="" className="desk-footer-logo" />
					&nbsp;
					The Bulb Africa.
				</span>
				<span>All rights reserved</span>
			</div>
			<div className="hyperlinks">
				<Link target="_blank" to="/privacyPolicy">Privacy policy</Link>
				<Link target="_blank" to="/termsOfUse">Terms of use</Link>
			</div>
			<div className="social-links">
				<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/"><img src={facebook} alt="" /></a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><img src={twitter} alt="" /></a>
				<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><img src={instagram} alt="" /></a>
				<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/"><img src={linkedin} alt="" /></a>
				<a target="_blank" rel="noopener noreferrer" href="https://youtube.com/"><img src={youtube} alt="" /></a>
			</div>
		</div>
	</div>
);

export default Footer;