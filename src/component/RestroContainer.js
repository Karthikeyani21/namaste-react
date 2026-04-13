import RestroCards from "./RestroCards";
import { resList } from "../utils/mock";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const RestroContainer = () => {
    // state variable - powerful 
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([])

    const [searchValue, setSearchValue] = useState("");

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0381896&lng=80.1565461&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResList(json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    useEffect(()=> {
        // make an api call once after rendering the UI
        fetchData();

    }, []);

    // conditional rendering
    return !restaurantList.length ? <Shimmer/> :  (
       <>
          <div style={{display:"flex", gap:"16px"}}>
              <div className="search">
                <input className="search-box" value={searchValue} onChange={(event)=>{ setSearchValue(event.target.value)}}></input>
                <button className="btn" onClick={ () => {
                    console.log(searchValue);
                    const filteredValue = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                    setFilteredResList(filteredValue)
                }}>Search</button>
              </div>

             <button style={{cursor: "pointer"}}  onClick={() => {
                const filteredData = restaurantList.filter(res => res.info.avgRating > 4)
                // update the state variable
                setFilteredResList(filteredData)
             }} >Top Rated Restaurant</button>
          </div>
          <div className="res-container">
    
           { filteredResList.map((restaurant) => {
                const res = restaurant.info;
                return (<RestroCards key={res.id} resData={res}/> )
            })}
        </div>
       </>
    )
}
