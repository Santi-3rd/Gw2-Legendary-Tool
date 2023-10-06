import { useState, useContext, useEffect } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";
import { api } from "../utilities.jsx";
import { Welcome } from "../components/Welcome";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const logIn = async (e) => {
    e.preventDefault();
    let response = await api.post("users/login/", {
      email: userName,
      password: password,
    })
    .catch((err) => {
      alert("Incorrent Credentials")
    })
    let user = response.data.user;
    let token = response.data.token;
    setUser(user);
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Token ${token}`
    navigate("/library"); 
  };


  return (

    <div>
      <Welcome />
    <form onSubmit={(e) => logIn(e)}>
      <h5>Log In</h5>
      <input 
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="email"
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
