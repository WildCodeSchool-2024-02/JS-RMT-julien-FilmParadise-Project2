import { useCart } from "../../context/MovieContext";
import "./addFavory.css";

function AddFavory({ movie }) {
  const { addToFavory } = useCart();
  return (
    <button
      type="button"
      className="favory-button"
      onClick={() => addToFavory(movie)}
    >
      favory
    </button>
  );
}

export default AddFavory;
