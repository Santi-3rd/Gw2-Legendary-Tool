import { useState, useContext } from "react";
import { userContext } from "../App";
import { api } from "../utilities.jsx";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../components/Welcome";

export const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    let response = await api.post("users/register/", {
      email: userName,
      name: name,
      password: password,
    })
    .catch((err) => {
      alert("Incorrent Credentials")
    })
    let user = response.data.user;
    let token = response.data.token;
    // Store the token securely (e.g., in localStorage or HttpOnly cookies)
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    // set the user using with useContext to allow all other pages that need user information
    setUser(user);
    navigate("/profile");
  };

  return ( 
    <div>
      <Welcome />
    <form onSubmit={(e) => signUp(e)}>
      <h5>Sign Up</h5>
      <input 
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="email"
      />
      <input
        // user name
        type="text"  
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <input type="submit" />
    </form>
    </div>
  );
};
