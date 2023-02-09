import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./shared/cartSlice";
const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return (
    <ul>
      {cartItems.map((item) => (
        <div className="ml-2" key={item.id}>
          <li className="  w-1/2 h-36 p-2 m-1 shadow-lg hover:shadow-2xl rounded-lg">
            <div>
              <div className="text-sm font-bold ml-2">
                {item?.name}
                {item.isVeg == 0 ? <span>🔴</span> : <span> 🟢 </span>}
              </div>

              <div className="ml-2">
                {item?.price / 100 == 0 ? (
                  <span className="text-sm mr-1 ">
                    ₹{item?.defaultPrice / 100}
                  </span>
                ) : (
                  <span className="text-sm mr-1 ">₹{item?.price / 100}</span>
                )}
                <p>{item.category}</p>
                <p className="text-[12px]">{item.description}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handelRemoveItem(item);
                  }}
                  className=" p-1 rounded-lg bg-red-400  text-[11px] hover:bg-red-500 text-white "
                >
                  REMOVE
                </button>
              </div>
            </div>
          </li>
        </div>
      ))}
      <button
        className="bg-red-500 hover:bg-red-600 rounded-lg p-1 m-3 text-white"
        onClick={() => {
          handleCartClear();
        }}
      >
        Clear Cart
      </button>
    </ul>
  );
};
export default CartItems;
