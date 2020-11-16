import React from 'react';
import ProductsPresenter from './ProductsPresenter';

const ProductsContainer = ({apis}) => {
  const {title, items} = apis

  return (
    <ProductsPresenter
      title={title}
      items={items}
    />
  );
};

export default ProductsContainer;