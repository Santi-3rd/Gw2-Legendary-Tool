import { api } from "../utilities.jsx";
import { useEffect, useState} from "react";
import { TitleNavBar } from "../components/title-nav-bar.jsx";
import { ItemNavBar } from "../components/item-nav-bar.jsx";
import { RecipeTree } from "../components/recipe-tree.jsx";
import './styles/table.css'
// import { LegendaryTypeTable } from "../components/legendary-type-table.jsx";

export const LegendaryRecipePage = () => {
    const [items, setItems] = useState([])
    const [selectedType, setSelectedType] = useState('')
    
    useEffect(() => {        
        const fetchData = async () => {
    
          try {
            const legendaries = await api.get(`legendary/`);
            
            const itemsData = await Promise.all(legendaries.data.id.map(id => api.get(`https://api.guildwars2.com/v2/items/${id}`)));
            console.log(itemsData)
            setItems(itemsData.map(item => ({
              icon: item.data.icon, 
              name: item.data.name,
              type: item.data.type,
            })));

          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

      const filteredItems = items.filter(item => item.type === selectedType);
    
    return (
        <div>
            <TitleNavBar/>
            <ItemNavBar setSelectedType={setSelectedType}/>
            <div>
              <table className="main-table">
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={index} className="main-table">
                      <td><img src={item.icon}></img></td>
                      <td className="main-table">{item.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RecipeTree/>
        </div>
    )
}

