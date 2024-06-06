import { useState } from "react";
import { useCart } from "../../context/MovieContext";
import "./OrderForm.css";

function OrderForm({ totalPrice }) {
  const {setCart} = useCart();
  
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    street: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    setIsOrderPlaced(true);
  };

  const handleClose = () => {
  
    setIsOrderPlaced(false);
    setFormData({
      name: "",
      lastname: "",
      street: "",
      zipcode: "",
      country: "",
      phone: "",
    });
    setCart([]);
  };

    if (isOrderPlaced) {
      return (
        <div className="confirmation-window">
        <p>Thank you {formData.name} {formData.lastname} for your purchase!</p>
        <p>You'll receive your invoice in a few days by post.</p>
        <p>Total: {totalPrice} €</p>
        <button type="button" onClick={handleClose}>Close</button>
      </div>
    );
  }
    return (
        <form className="order-form box" onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Lastname:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Street number & name:
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Zipcode:
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Order</button>
        </form>
      ); 
}

export default OrderForm;
