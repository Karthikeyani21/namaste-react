import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestroMenu = () => {

    const [resMenu, setResMenu] = useState(null);
    const [resInfo, setResInfo] = useState([])


    // console.log()
    const {resId} = useParams();
    const fetchResMenu = async () => {
        const data =await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0126024&lng=77.6781045&restaurantId="+ resId);
        const resData = await data.json();
        // console.log(resData);
        setResInfo(resData.data.cards[2].card.card.info.name);
        setResMenu(resData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        console.log(resMenu)
    }

    useEffect( ()=> {
        fetchResMenu()
    },[])

    if(!resMenu?.length) return <Shimmer/>;

    return (
        <>
           <h1>{resInfo}</h1>
           <div>
               <h2>Recommended Foods</h2>
               <hr></hr>
               {resMenu.map((item) => {
                    const itemm = item.card.info;
                     return (
                    <div key={itemm.id} style={{display:"flex"}} className="food-card">
                        <img className="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+itemm.imageId}></img>
                        {/* <img className="food-img" src={itemm.imageId}></img> */}
                        <div className="food-detail">
                             <h2 className="">{itemm.name}</h2>
                             <h3>150 rs</h3>
                             <p>⭐ rating</p>
                        </div>
                     </div>)
                    
               })}
           </div>
        </>
    )
}

export default RestroMenu;