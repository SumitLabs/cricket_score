import "./platform.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Platform = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.username&&formData.email&&formData.password){
      try {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData);
        alert(res.data.message || 'Registration successful'); // ✅ Use the response message
        navigate('/login');
      } catch (err) {
        alert(err.message);
      }
    }
    else {
      alert('enter all fields...');
    }
   
  };

  return (
    <div className="platform flex center">
      <div className="register">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Register" />
        </form>
        <p>
          <Link to="/login">I have an account</Link>
         
        </p>
      </div>
    </div>
  );
};

export default Platform;
