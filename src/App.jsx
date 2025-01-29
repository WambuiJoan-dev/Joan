import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import SearchSort from './SearchSort';

function App() {
  const productList = [
    { id: 1, name: 'T-Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 40 },
    { id: 3, name: 'Sneakers', price: 60 },
    { id: 4, name: 'Hat', price: 15 },
    { id: 5, name: 'Socks', price: 5 },
  ];

  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [sortOption, setSortOption] = useState('name-asc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);
  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1>Product List</h1>
      <SearchSort searchQuery={searchQuery} setSearchQuery={setSearchQuery} sortOption={sortOption} setSortOption={setSortOption} />
      <ProductList products={productList} searchQuery={searchQuery} sortOption={sortOption} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} calculateTotal={calculateTotal} />
    </div>
  );
}

export default App;
