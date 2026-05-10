import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestroMenu = () => {

    const [resMenu, setResMenu] = useState(null);
    const [resInfo, setResInfo] = useState([])
    const [showIndex, setShowIndex] = useState(1) 


    // console.log()
    const {resId} = useParams();
    const fetchResMenu = async () => {
        const data =await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0126024&lng=77.6781045&restaurantId="+ resId);
        const resData = await data.json();
        setResInfo(resData.data.cards[2].card.card.info.name);
        setResMenu(resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((card) => card?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    }

    useEffect( ()=> {
        fetchResMenu()
    },[])

    if(!resMenu?.length) return <Shimmer/>;

    return (
        <div className="">
           <h1 className="font-bold font-medium text-[30px]">{resInfo}</h1>
           <div>
               {resMenu.map((item, index) => {
                  return (
                     <RestaurantCategory key={index} 
                                         data={item.card.card} 
                                         setShowIndex = {() => {setShowIndex(index)}}
                                         showItem={index == showIndex ? true : false}/>
                  )
                  
               })}


               {/* <h2>Recommended Foods</h2> */}
               {/* <hr></hr> */}
               {/* {resMenu.map((item) => {
                    const itemm = item?.card?.card?.itemCards;
                    console.log("infoitem", item)
                    return itemm.map((i) => {
                        const foodInfo = i.card.info;
                        console.log(foodInfo)
                         return (
                            
                            <div key={foodInfo.id} style={{display:"flex"}} className="food-card">
                                <img className="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+foodInfo.imageId}></img>

                                <div className="food-detail">
                                     <h2 className="">{foodInfo.name}</h2>
                                     <h3>150 rs</h3>
                                     <p>⭐ rating</p>
                                </div>
                            </div>
                            )
                        })
                    })} */}
           </div>
        </div>
    )
}

export default RestroMenu;