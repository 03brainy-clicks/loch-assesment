import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
