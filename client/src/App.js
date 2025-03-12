import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<List />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
