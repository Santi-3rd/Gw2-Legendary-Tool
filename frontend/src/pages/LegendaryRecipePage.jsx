import { api } from "../utilities.jsx";
import { useEffect, useState} from "react";
import { TitleNavBar } from "../components/title-nav-bar.jsx";
import { ItemNavBar } from "../components/item-nav-bar.jsx";
import { RecipeTree } from "../components/recipe-tree.jsx";
import './styles/table.css'
import { LegendaryTypeTable } from "../components/legendary-type-table.jsx";

export const LegendaryRecipePage = () => {
    const [Items, setItems] = useState([])
    const [selectedType, setSelectedType] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    
    useEffect(() => {        
      const fetchData = async () => {

        try {
          //Gets all the legendary equipment's ids
          const legendaries = await api.get(`legendary/`);
          
          //Gets the legendary equipment's data by using it's id
          const itemsData = await Promise.all(legendaries.data.id.map(id => api.get(`https://api.guildwars2.com/v2/items/${id}`))); 
          console.log(itemsData)
          
          //Gets the legendary equipment's TP buy and sell price by using it's id
          // const TradingPostPrices = await  api.get(`tradingpost/prices?${19684}, ${19709}`);

          // console.log(TradingPostPrices)

          // TradingPostPrices.forEach(item => {
          //   console.log('Sell Price:')
          //   console.log(item.data.sell_price)
          //   console.log('Buy Price:')
          //   console.log(item.data.buy_price)
          // })

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

    //Filters by type
    const filteredItems = Items.filter(item => item.type === selectedType);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    
  return (
      <div>
          <TitleNavBar/>
          <ItemNavBar 
            setSelectedType={setSelectedType}
            setCurrentPage={setCurrentPage}
          />
          <LegendaryTypeTable 
            currentItems={currentItems} 
            itemsPerPage={itemsPerPage} 
            setCurrentPage={setCurrentPage} 
            totalItems={filteredItems.length} 
          />
      </div>
  )
}

