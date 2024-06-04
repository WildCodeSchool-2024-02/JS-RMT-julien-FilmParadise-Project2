import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./footer.css";

function Formulaire() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then((result) => {
        if (result.status === 200) {
          setSuccess((s) => !s);
          form.current.reset();
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="formulaire">
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" required />
      <label htmlFor="message">Message</label>
      <textarea name="message" required />
      <button type="submit">Submit</button>
      {success && <p>Votre e-mail à bien été envoyé</p>}
      {error && <p>Erreur lors de l'envoi de votre e-mail</p>}
    </form>
  );
}
export default Formulaire;
