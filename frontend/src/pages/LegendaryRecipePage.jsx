import { api } from "../utilities.jsx";
import { useEffect, useState} from "react";
import { TitleNavBar } from "../components/title-nav-bar.jsx";
import { ItemNavBar } from "../components/item-nav-bar.jsx";
import { RecipeTree } from "../components/recipe-tree.jsx";

export const LegendaryRecipePage = () => {
 
    
    return (
        <div>
            <TitleNavBar/>
            <ItemNavBar/>
            <RecipeTree/>
        </div>
    )
}

