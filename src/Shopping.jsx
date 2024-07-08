import React, { useState } from 'react';

const initialItems = [
  { id: 1, name: 'Apple', price: 80, quantity: 0 },
  { id: 2, name: 'Banana', price: 70, quantity: 0 },
  { id: 3, name: 'Orange', price: 100, quantity: 0 },
];

function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleAddToCart = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity} @ {item.price.toFixed(2)} each)
            <button onClick={() => handleAddToCart(item.id)}>Add</button>
            <input type="number" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}/>
          </li>
        ))}
      </ul>
      <p>Total Price: {calculateTotalPrice().toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;
