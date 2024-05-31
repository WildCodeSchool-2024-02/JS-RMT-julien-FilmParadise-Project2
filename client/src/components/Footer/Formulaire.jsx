import { useState } from "react";
import "./footer.css";

function Formulaire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => event.preventDefault();

  const handleChange = (event, setState) => {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      setState(inputValue);
    } else {
      setState("");
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
        onChange={(e) => handleChange(e, setName)}
      />
      <label htmlFor="email">Email :</label>
      <input
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={(e) => handleChange(e, setEmail)}
      />
      <label htmlFor="email">Message :</label>
      <input
        id="message"
        name="message"
        type="text"
        value={message}
        onChange={(e) => handleChange(e, setMessage)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Formulaire;
