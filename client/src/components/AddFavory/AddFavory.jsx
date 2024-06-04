import { useCart } from "../../context/MovieContext";

import "./addFavory.css";
import emptyHeart from "../../assets/images/heart-empty.png";
import redHeart from "../../assets/images/heart-red.png";

function AddFavory({ movie, classButtonFavory }) {
  const { handleFavory, favory } = useCart();
  return (
    <button
      type="button"
      className={classButtonFavory}
      onClick={() => handleFavory(movie)}
    >
      {!favory.some((item) => item.id === movie.id) ? (
        <img src={emptyHeart} alt="is not favorite" />
      ) : (
        <img src={redHeart} alt="is favorite" />
      )}
    </button>
  );
}

export default AddFavory;
