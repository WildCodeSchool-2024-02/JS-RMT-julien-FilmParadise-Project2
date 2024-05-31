import "./addToCart.css";

function ButtonCart() {
  const cart = [];
  const cartClick = () => {
    cart.push(1);
  };
  return (
    <button className="button-cart" type="button" onClick={cartClick}>
      Add to cart
    </button>
  );
}

export default ButtonCart;
