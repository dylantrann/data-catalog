import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Attempts to login, redirected if successful
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/products");
    } catch (error) {
      alert("Invalid login: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <input
          class="form-control"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div class="mb-3">
      <input
        class="form-control"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </div>
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
  );
}

export default Login;
