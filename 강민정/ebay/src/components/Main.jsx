import React, {useEffect, useState} from 'react';
import Category from './main/Category';
import Store from './main/Store';
import Best from './main/Best';
import Exhibition from './main/Exhibition';
import Product from './main/Product';

const Main = () => {
  const PATH = 'https://baekcode.github.io/APIs/';
  return (
    <>
      <Category PATH={PATH} />
      <Store PATH={PATH} />
      <Best PATH={PATH} />
      <Exhibition PATH={PATH} />
      <Product PATH={PATH} />
    </>
  )
}

export default Main;