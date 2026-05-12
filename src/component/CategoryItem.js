import { useDispatch } from "react-redux"
import { addItems } from "../utils/cartSlice";


const CategoryItem = ({info, showBtn}) => {
    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        dispatch(addItems(item))
    }

    console.log(info)
    return (
        <div>
            {info.map((item, index) => {
                const itemInfo = item?.card?.info;
                return (
                  <div className="flex justify-between items-center" key={index}>
                    <div className="p-4 border-b-2">
                        <h2>{itemInfo.name}</h2>
                        <h2>${itemInfo.price/100}</h2>
                        <h2 className="text-xs">{itemInfo.description}</h2>
                    </div>
                        {showBtn && <button className="border bg-black text-white px-3 py-1" 
                            onClick={() => addItemToCart(item)}>Add+</button>}
                  </div>

                )

            })}
        </div>
    )
}

export default CategoryItem;