import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {add , remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

    const   cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id)); 
        toast.error("Item removed from Cart")
    }

    return (
        <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
        border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
        md:hover:scale-[1.05] transition ease-in">
            <div>
                <p className="text-[#1d783e] font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div>
                <p className="w-50 text-gray-700 font-semibold text-[12px]">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full"/>
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-red-600 font-semibold">₹{post.price}</p>
                </div>

                {
                    cart.some((p) => {
                        return p.id === post.id
                    }) ?
                    (<button className="text-grey-700 border-2 border-gray-600
                     rounded-full font-semibold text-[12px] p-1 px-3
                     hover:bg-gray-700
                     hover:text-white transition duration-300 ease in"
                     onClick={removeFromCart}>
                        REMOVE ITEM
                    </button>) :
                    (<button className="text-grey-700 border-2 border-gray-600
                    rounded-full font-semibold text-[12px] p-1 px-3
                    hover:bg-gray-700
                    hover:text-white transition duration-300 ease in"
                     onClick={addToCart}>
                        ADD TO CART
                    </button>)
                }
            </div>

        </div>
    );
}

export default Product;