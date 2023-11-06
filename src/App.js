import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
