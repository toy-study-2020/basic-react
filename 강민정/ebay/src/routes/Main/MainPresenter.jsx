import React from 'react';
import Category from "../../components/Main/Category";
import Store from "../../components/Main/Store";
import Best from "../../components/Main/Best";
import Exhibition from "../../components/Main/Exhibition";
import Product from "../../components/Main/Product";

const MainPresenter = () => {

  return (
    <>
      <Category />
      <Store />
      <Best />
      <Exhibition />
      <Product />
    </>
  )
}


export default MainPresenter;