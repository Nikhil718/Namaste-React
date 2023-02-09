import CartItems from "./CartItems";

const Cart = () => {
  return (
    <>
      <h1 className="text-3xl font-bold m-5 underline">Cart</h1>
      <div>
        <CartItems />
      </div>
    </>
  );
};
export default Cart;
