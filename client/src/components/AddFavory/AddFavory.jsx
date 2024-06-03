import { useCart } from "../../context/MovieContext";
import "./addFavory.css";

function AddFavory({ movie, classButtonFavory }) {
  const { addToFavory } = useCart();
  return (
    <button
      type="button"
      className={classButtonFavory}
      onClick={() => addToFavory(movie)}
    >
      favory
    </button>
  );
}

export default AddFavory;
