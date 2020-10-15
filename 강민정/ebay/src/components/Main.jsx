import React from 'react';
import Category from './main/Category';
import Store from './main/Store';
import Best from './main/Best';
import Exhibition from './main/Exhibition';
import Product from './main/Product';

const Main = ({Link}) => {
  const PATH = 'https://baekcode.github.io/APIs/';
  return (
    <>
      <Category
        PATH={PATH}
        Link={Link}
      />
      <Store
        PATH={PATH}
        Link={Link}
      />
      <Best
        PATH={PATH}
        Link={Link}
      />
      <Exhibition
        PATH={PATH}
        Link={Link}
      />
      <Product
        PATH={PATH}
        Link={Link}
      />
    </>
  )
}

export default Main;