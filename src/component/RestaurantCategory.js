import { useState } from "react";
import CategoryItem from "./CategoryItem";


const RestaurantCategory = ({data, showItem, setShowIndex}) => {
    const toggleAccordion = () => {
        setShowIndex()
    }
    return (
        <>
           {/* header */}
           <div className="w-6/12 p-2 m-2 mx-1 px-1 bg-gray-100 shadow-md rounded-md ">
               <div className="flex justify-between cursor-pointer" onClick={toggleAccordion}>
                  <h2 className="font-bold">{data.title}({data.itemCards.length})</h2> <span> ⬇️</span>
               </div>
                {/* Accordion */}
               {showItem && <CategoryItem info={data.itemCards} showBtn={true}/>}
           </div>


        </>
    )
}

export default RestaurantCategory;