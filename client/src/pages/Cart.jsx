import { useCart } from "../context/MovieContext";

import CartDetails from "../components/CartDetails/CartDetails";
import Header from "../components/header/Header";

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);

  return (
    <>
      <Header />
      {cart.length === 0 ? (
        <h2 className="empty-cart">There is nothing in your cart !</h2>
      ) : (
        <>
          <h2 className="title-cart">Your cart :</h2>
          <div className="all-cart">
            {cart.map((movie) => (
              <CartDetails movie={movie} key={movie.title} />
            ))}
          </div>
          <div className="adjust-total-css">
            <h2 className="total-price box">Total : {totalPrice} €</h2>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
