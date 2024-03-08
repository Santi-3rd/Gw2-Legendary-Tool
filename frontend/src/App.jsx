import { useEffect, useState} from "react";
import "./App.css";
import { Link, Outlet, useNavigate} from "react-router-dom";
import { createContext, useContext } from "react";
import { api } from "./utilities.jsx";



export const userContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const [icon, setIcon] = useState([]);

  const navigate = useNavigate();

  const whoAmI = async() => {
    let token = localStorage.getItem("token") 
    console.log("Retrieved token:", token);
    if (token){
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      let response = await api.get("users/")
      setUser(response.data)
      console.log(response)
    }
    else {
      setUser(null)
    }
  }

  useEffect(()=>{
    whoAmI()
  }, [])

  const logOut = async() => {
    let response = await api.post("users/logout/")
    if(response.status === 204){
      localStorage.removeItem("token")
      setUser(null)
      delete api.defaults.headers.common["Authorization"];
      navigate("/login");
    }
  }
  useEffect(() => {        
    const fetchData = async () => {

      try {
        const response = await api.get("recipes/search/");
        console.log(response.data);
        const response_2 = await api.get(`https://api.guildwars2.com/v2/items/${12345}`);
        setIcon(response_2.data.icon);
        console.log(response_2.data.icon)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id="app">
        {/* <nav>
          { 
            user
            ?
            <>
            <Link to="/profile">Profile</Link>
            <button onClick={logOut}>Log out</button>
            </>
            :
            <>
            <Link to="/">Sign Up</Link>
            <Link to="/login">Log In</Link>
            </>
          }
        </nav> */}
        <div>
          <img src={`${icon}`}></img>
        </div>
      <userContext.Provider value={{ user, setUser, games, setGames }}>
        <Outlet />
      </userContext.Provider>
    </div>
  );
}

export default App
