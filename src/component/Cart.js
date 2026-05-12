import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    // need to subscribe only the specfic part we want to use instead of subscribing to the whole store. It will optimze the performance
    // if anything changed in store.cart.items it will automatically update and re-render the comp
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch()

    const clearAll = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center p-4">
            <h1 className="font-bold">Cart</h1>
            <button className="bg-black text-white px-2 py-1 rounded-md"
                    onClick={clearAll}
                   >Clear Cart</button>

            <CategoryItem info={cartItems} showBtn={false}/>
        </div>
    )
}

export default Cart;