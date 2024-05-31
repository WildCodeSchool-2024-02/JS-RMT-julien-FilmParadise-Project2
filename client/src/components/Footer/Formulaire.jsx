import { useState } from "react";
import "./footer.css";

function Formulaire() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => event.preventDefault();

  const handleChange = (event) => {
    if (event.target.value) {
      setName(event.target.value);
    }
  };

  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
}

export default Formulaire;
