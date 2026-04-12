import RestroCards from "./RestroCards";
import { resList } from "../utils/mock";
import { useState } from "react";

export const RestroContainer = () => {
    // state variable
    const [restaurantList, setRestaurantList] = useState(resList);


    return (
       <>
          <button style={{cursor: "pointer"}}  onClick={() => {
             const filteredData = resList.filter(res => res.rating > 4)
             // update the state variable
             setRestaurantList(filteredData)
          }} >Top Rated Restaurant</button>
          <div className="res-container">
            
           { restaurantList.map((restaurant) => {
                return (<RestroCards key={restaurant.id} resData={restaurant}/> )
            })}
        </div>
       </>
    )
}
