import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import LandingPage from "./components/LandingPage/Home/Home";
import TheBulb from "./components/TheDesk/Home/Home";
import TermsOfUse from "./components/TheDesk/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/TheDesk/PrivacyPolicy/PrivacyPolicy";

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/theBulb" element={<TheBulb />} />
			<Route path="/termsOfUse" element={<TermsOfUse />} />
			<Route path="/privacyPolicy" element={<PrivacyPolicy />} />
		</Routes>
	</Router>
);

export default App;