/* eslint-disable no-unused-vars */
import Spaghetti from "../../Assets/image/pasta.jpg"
import Tiramisu from "../../Assets/image/tiramisu.jpg"
import Bruschetta from "../../Assets/image/bruchetta.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Spaghetti Carbonara", price: 16.99, quantity: 2, image:Spaghetti + "?height=100&width=100" },
    { id: 2, name: "Tiramisu", price: 8.99, quantity: 1, image: Tiramisu+"?height=100&width=100" },
    { id: 3, name: "Bruschetta", price: 8.99, quantity: 1, image: Bruschetta+"?height=100&width=100" },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Header/>
    <div className="cart-page">
      {/* Hero Section */}
      <div className=" text-white-50 py-5 m-5">
        <div className="container-fluid">
          <h1 className="display-4 text-center">Your Cart</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center">
                <h2>Your cart is empty</h2>
                <Link to="/menu" className="btn btn-primary mt-3">Return to Menu</Link>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{item.name}</h5>
                            <span className="font-weight-bold">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="input-group" style={{ width: '120px' }}>
                              <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                              <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button className="btn btn-danger btn-sm" onClick={() => updateQuantity(item.id, 0)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Order Summary */}
                <div className="card mt-4">
                  <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <div className="d-flex justify-content-between mt-3">
                      <span>Subtotal:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <span>Tax (8%):</span>
                      <span>${(total * 0.08).toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong>Total:</strong>
                      <strong>${(total * 1.08).toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CartPage;
