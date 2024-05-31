import { useCart } from "../context/MovieContext";
import CartDetails from "../components/CartDetails/CartDetails";
import Header from "../components/header/Header";

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);

  return (
    <>
      <Header />
      <h2 className="title-cart">Your cart :</h2>
      {cart.map((movie) => (
        <CartDetails movie={movie} key={movie.title} />
      ))}
      <h2 className="total-price box">Total : {totalPrice} €</h2>
    </>
  );
}

export default Cart;
