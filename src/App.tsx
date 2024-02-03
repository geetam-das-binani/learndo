import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import { lazy, Suspense } from "react";
// import Loader from "./components/Loader";

// const Home = lazy(() => import("./components/Home"));
// const Learning = lazy(() => import("./components/Learning"));
// const Quiz = lazy(() => import("./components/Quiz"));
// const Result = lazy(() => import("./components/Result"));
// const Login = lazy(() => import("./components/Login"));
import Home from "./components/Home";
import Learning from "./components/Learning";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Login from "./components/Login";
const App = () => {
	return (
		<BrowserRouter>
			<Header />
			{/* <Suspense fallback={<Loader />}> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/learn" element={<Learning />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/result" element={<Result />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* </Suspense> */}
		</BrowserRouter>
	);
};

export default App;
