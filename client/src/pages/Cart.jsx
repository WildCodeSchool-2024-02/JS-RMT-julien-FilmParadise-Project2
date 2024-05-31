import CartDetails from "../components/CartDetails/CartDetails";
import Header from "../components/header/Header";

function Cart() {
  return (
    <>
      <Header />
      <h2>Your cart :</h2>
      <CartDetails />
    </>
  );
}

export default Cart;
