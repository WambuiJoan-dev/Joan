import React from 'react';
import Product from './Product';

function ProductList({ products, searchQuery, sortOption, addToCart }) {
  const sortProducts = (items) => {
    let sortedProducts = [...items];
    if (sortOption === 'name-asc') sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortOption === 'name-desc') sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortOption === 'price-asc') sortedProducts.sort((a, b) => a.price - b.price);
    else if (sortOption === 'price-desc') sortedProducts.sort((a, b) => b.price - a.price);
    return sortedProducts;
  };

  const filteredProducts = sortProducts(products).filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='product-list'>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;