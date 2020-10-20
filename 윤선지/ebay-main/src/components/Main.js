import React from 'react';
import Store from './store';
import Best from './best';
import Chance from './chance';

function Main() {
  return (
    <>
        <Store getUrl='https://baekcode.github.io/APIs/mainStore.json'></Store>
        <Best getUrl='https://baekcode.github.io/APIs/mainBest.json'></Best>
        <Chance getUrl='https://baekcode.github.io/APIs/mainProducts.json'></Chance>
    </>
  );
}

export default Main;
