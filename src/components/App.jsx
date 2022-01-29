import { Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import AboutMe from "./AboutMe";
import NotFound from "./NotFound";
import Footer from "./sides/Footer";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AboutMe />} />
				<Route path="/projects" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
