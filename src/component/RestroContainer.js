import RestroCards from "./RestroCards";
import { resList } from "../utils/mock";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { highlightRes } from "./RestroCards";

export const RestroContainer = () => {
    // state variable - powerful 
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([])

    const [searchValue, setSearchValue] = useState("");

    const HighlightResCard = highlightRes(RestroCards)

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0381896&lng=80.1565461&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("res list",json?.data.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                <input data-testid="inputText" className="border border-black" value={searchValue} onChange={(event)=>{ setSearchValue(event.target.value)}}></input>
                <button className="border border-black py-2 px-3 m-2" onClick={ () => {
                    const filteredValue = restaurantList.filter((res)=> res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                    setFilteredResList(filteredValue)
                }}>Search</button>
              </div>

             <button style={{cursor: "pointer"}} className="border border-black py-2 px-3 m-2"  onClick={() => {
                const filteredData = restaurantList.filter(res => res.info.avgRating > 4.2)
                // update the state variable
                setFilteredResList(filteredData)
             }} >Top Rated Restaurant</button>
          </div>
          <div className="res-container">
    
           { filteredResList.map((restaurant) => {
                const res = restaurant.info;
                return (
                <Link to={"/restaurants/" + res.id}  key={res.id}>
                    {(<RestroCards resData={res}/>)}
                </Link> )
            })}
        </div>
       </>
    )
}
