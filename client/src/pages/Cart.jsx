import { useCart } from "../context/MovieContext";

import CartDetails from "../components/CartDetails/CartDetails";
import Header from "../components/header/Header";
import OrderForm from "../components/OrderForm/OrderForm";
import Footer from "../components/Footer/Footer";

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);

  return (
    <div className="container">
      <Header />
      <main className="cart">
        {cart.length === 0 ? (
          <h2 className="empty-cart">There is nothing in your cart !</h2>
        ) : (
          <div className="cart-content">
            <div className="cart-summary">
              <h2 className="title-cart">Your cart :</h2>
                <div className="all-cart">
                {cart.map((movie) => (
                 <CartDetails movie={movie} key={movie.title} />
              ))}
            </div>
            <div className="adjust-total-css">
              <h2 className="total-price box">Total : {totalPrice} €</h2>
            </div>
          </div>
          <OrderForm totalPrice={totalPrice} />
        </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
