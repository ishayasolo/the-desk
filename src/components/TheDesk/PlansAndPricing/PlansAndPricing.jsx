import React from "react";
import "./PlansAndPricing.css";

const PlansAndPricing = () => (
	<div className="plans-and-pricing" id="plans">
		<div className="plans-and-pricing-container">
			<h3 className="p-and-p" data-aos="fade-down">Plans and Pricing <br /><small style={{fontSize: "0.7rem", color: "#10152c"}}>hover or tap on each plan for more info</small></h3>
			<div className="group">
				<div className="left" data-aos="fade-up" data-aos-duration="1000">
					<div className="left-first">
						<h4 className="plans-category">Individual Plans</h4>
						<ul className="left-extras">
							<li>Dedicated desk &nbsp;<span style={{color: "green", fontWeight: "800"}}>&#10003;</span></li>
							<li>Mail Management &nbsp;<span style={{color: "red"}}>&#10005;</span></li>
							<li>Unlimited Wifi &nbsp;<span style={{color: "green", fontWeight: "800"}}>&#10003;</span></li>
							<li>Free but limited printing &nbsp;<span style={{color: "green", fontWeight: "800"}}>&#10003;</span></li>
							<li>Access to Board Room &nbsp;<span style={{color: "red"}}>&#10005;</span></li>
							<li>Lounge Areas &nbsp;<span style={{color: "green", fontWeight: "800"}}>&#10003;</span></li>
							<li>Functional Kitchenette &nbsp;<span style={{color: "green", fontWeight: "800"}}>&#10003;</span></li>
						</ul>
					</div>
					<div className="left-second">
						<h4 className="plans-category">Individual Plans</h4>
						<ul className="left-pricing">
							<li style={{fontWeight: "600", fontSize: "1.2rem"}}>Price per desk</li>
							<li>Daily - N 5,000</li>
							<li>Weekly - N 15,000</li>
							<li>Monthly - N 50,000</li>
							<li>Quarterly - N 150,000</li>
						</ul>
					</div>
				</div>
				<div className="empty" data-aos="fade-in" data-aos-duration="1000"></div>
				<div className="right" data-aos="fade-up" data-aos-duration="1000">
					<div className="right-first">
						<h4 className="plans-category">Enterprise Plans</h4>
						<ul className="right-extras">
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Dedicated desk</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Mail Management</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Unlimited Wifi</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Free but limited printing</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Access to Board Room</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Lounge Areas</li>
							<li><span style={{color: "green", fontWeight: "800"}}>&#10003;</span>&nbsp; Functional Kitchenette</li>
						</ul>
					</div>
					<div className="right-second">
						<h4 className="plans-category">Enterprise Plans</h4>
						<ul className="right-pricing">
							<li style={{fontWeight: "600", fontSize: "1.2rem"}}>Price per desk</li>
							<li>Daily - N 4,000</li>
							<li>Weekly - N 14,000</li>
							<li>Monthly - N 45,000</li>
							<li>Quarterly - N 130,000</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<a data-aos="zoom-out" data-aos-duration="1000" target="_blank" rel="noopener noreferrer" className="plans-cta" href="https://docs.google.com/forms/d/e/1FAIpQLSeaHPZHXj95hG7kxcR1LUmaNKrfe0EHTZnr79D_wuAWK3t0oA/viewform">Book a space now!</a>
	</div>
);

export default PlansAndPricing;