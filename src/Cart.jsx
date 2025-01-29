import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart, clearCart, calculateTotal }) {
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products to your cart!</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}
          </ul>
          <strong>Total: ${calculateTotal()}</strong>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
