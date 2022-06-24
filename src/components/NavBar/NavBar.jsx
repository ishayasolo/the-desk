import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from "../../images/the-desk-bulb-logo.6a2228d2 1.svg";
import bars from "../../images/bars-solid.svg";
import cancel from "../../images/cancel.svg";

const NavBar = (props)  => {
	const openNav = () => {
		const navLinks = document.getElementById("navigationLinks");

		navLinks.style.width = "100%";
		document.body.style.overflowY = "hidden"
	}

	const closeNav = () => {
		const navLinks = document.getElementById("navigationLinks");

		navLinks.style.width = "0";
		document.body.style.overflowY = "scroll";
	}

	return (
		<nav className="nav">
			<div className="nav-container">
				<div className="mobile">
					<Link className="logo-container" to="/">
						<img className="logo" src={logo} alt="the desk logo" />
					</Link>

					<img tabIndex="1" onClick={openNav} className="hamburger-icon" src={bars} alt="open navigation" role="button"/>
				</div>
	
				<div className="navigation-links" id="navigationLinks">
					<div className="close-container">
						<img src={cancel} className="close" onClick={closeNav} alt="close navigation"/>
					</div>
					{props.link0 && <a onClick={closeNav} href={props.link0Ref} target="_blank" rel="noopener noreferrer" className="navigation-link">{props.link0}</a>}
					<a onClick={closeNav} href={props.link1Ref} className="navigation-link">{props.link1}</a>
					<a onClick={closeNav} href={props.link2Ref} className="navigation-link">{props.link2}</a>
					{props.link3Ref && <a href={props.link3Ref} className="bookASpace" >Book a space</a>}
					{props.bulbLink && <button className="dropdown-toggle bookASpace" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Book a space</button>}
					{props.bulbLink && <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li><a onClick={closeNav} className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSeaHPZHXj95hG7kxcR1LUmaNKrfe0EHTZnr79D_wuAWK3t0oA/viewform">@ ennov8</a></li>
						<li><Link onClick={closeNav} className="dropdown-item" target="_blank" rel="noopener noreferrer" to={props.bulbLink}>@ The Bulb</Link></li>
					</ul>}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;