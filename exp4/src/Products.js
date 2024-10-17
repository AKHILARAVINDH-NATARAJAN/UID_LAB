import React from 'react';

const Products = () => {
  const productList = ['Product 1', 'Product 2', 'Product 3'];

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
