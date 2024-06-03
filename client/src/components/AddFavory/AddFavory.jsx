import { useCart } from "../../context/MovieContext";

import "./addFavory.css";
import emptyHeart from "../../assets/images/heart-empty.png";
import redHeart from "../../assets/images/heart-red.png";

function AddFavory({ movie, classButtonFavory }) {
  const { addToFavory, favory } = useCart();
  return (
    <button
      type="button"
      className={classButtonFavory}
      onClick={() => addToFavory(movie)}
    >
      {!favory.some((item) => item.id === movie.id) ? (
        <img src={emptyHeart} alt="" />
      ) : (
        <img src={redHeart} alt="" />
      )}
    </button>
  );
}

export default AddFavory;
