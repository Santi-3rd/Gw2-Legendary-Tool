import { api } from "../utilities.jsx";
import { useEffect, useState} from "react";
import { TitleNavBar } from "../components/title-nav-bar.jsx";
import { ItemNavBar } from "../components/item-nav-bar.jsx";
import { RecipeTree } from "../components/recipe-tree.jsx";
import './styles/table.css'
// import { LegendaryTypeTable } from "../components/legendary-type-table.jsx";

export const LegendaryRecipePage = () => {
    const [icon, setIcon] = useState([]);
    const [itemName, setItemName] =useState([])


    useEffect(() => {        
        const fetchData = async () => {
    
          try {
            const legendaries = await api.get(`legendary/`);
            console.log(legendaries.data.id)

            // const response = await api.get("https://api.guildwars2.com/v2/recipes/search?input=71163");
            // console.log(response.data);
            
            const item_response = await api.get(`https://api.guildwars2.com/v2/items/${legendaries.data.id[0]}`);
            setIcon(item_response.data.icon);
            setItemName(item_response.data.name);
            console.log(item_response.data);

            // const tp_listing = await api.get(`https://api.guildwars2.com/v2/commerce/listings/30703`)
            // console.log(tp_listing)

            // const response_3 = await api.get(`https://api.guildwars2.com/v2/recipes/search?output=${legendaries.data.id[0]}`);
            // console.log(response_3)

          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
        <div>
            <TitleNavBar/>
            <ItemNavBar/>
            <div>
              <table class="main-table">
                <tr class="main-table">
                  <img src={`${icon}`}></img>
                  <td class="main-table"><h3>{itemName}</h3></td>
                </tr>
  
              </table>
            </div>
            <RecipeTree/>
        </div>
    )
}

